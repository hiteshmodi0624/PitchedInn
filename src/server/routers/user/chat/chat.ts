import { Chat, Message, User } from "@prisma/client";
import { observable } from "@trpc/server/observable";
import EventEmitter from "events";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../../../../server/trpc";
import { pusherServer } from "../../../../server/pusher";
import { toPusherKey } from "../../../../utils/pusher";
import { inferProcedureOutput } from "@trpc/server";

const ee = new EventEmitter();
const currentlyTyping: Record<string, { lastTyped: Date }> =
  Object.create(null);

export const chatRoutes = router({
  getUserChats: protectedProcedure.query(async (opts) => {
    const { ctx } = opts;
    const id = ctx.session?.user.id;
    const chats = await ctx.prisma.user.findUnique({
      where: { id },
      select: {
        chat: {
          include: {
            messages: {
              take: 1,
              orderBy:{
                createdAt:"desc"
              }
            },
          },
        },
      },
    });
    if (!chats) return [];
    const modifiedChats: (Chat & {
      messages: Message[];
    })[] = await Promise.all(
      chats.chat.map(async (chat) => {
        if (chat.type === "SINGLE") {
          const otherUserId =
            chat.userIds[0] !== id ? chat.userIds[0] : chat.userIds[1];
          const otherUser = await ctx.prisma.user.findUnique({
            where: { id: otherUserId },
          });
          chat.groupName = otherUser?.name ?? null;
          chat.photo = otherUser?.image ?? null;
          chat.description = otherUser?.bio ?? null;
        }
        return chat;
      })
    );
    return modifiedChats;
  }),
  createGroup: protectedProcedure
    .input(
      z.object({
        ids: z.string().array(),
        groupName: z.string().optional(),
        groupPhoto: z.string().optional(),
        groupDescription: z.string().optional(),
      })
    )
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      var { ids, groupName, groupPhoto, groupDescription } = input;
      const user1Id = ctx.session?.user.id;
      if (!user1Id) return;
      const group = ctx.prisma.chat.create({
        data: {
          type: "GROUP",
          userIds: [...ids, user1Id],
          groupName: groupName,
          photo: groupPhoto,
          description: groupDescription,
        },
      });
      return group;
    }),
  findMessages: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const { ctx, input } = opts;
      const id = ctx.session?.user.id;
      if (!id) throw new Error("No Session Found!");
      const user = await ctx.prisma.user.findUnique({
        where: { id },
        select: {
          chat: {
            where: {
              type: "SINGLE",
              AND: {
                userIds: {
                  has: input.id,
                },
              },
            },
            select: {
              messages: {
                select: {
                  content: true,
                  createdAt: true,
                  chatId: true,
                  creatorId: true,
                  id: true,
                },
              },
              id: true,
              groupName: true,
              photo: true,
              description: true,
            },
          },
        },
      });
      var chatId=user?.chat[0]?.id;
      var chat=user?.chat[0];
      if (user && user.chat.length===0) {
        const userIds = [input.id, id];
        const newChat=await ctx.prisma.chat.create({
          data: {
            type: "SINGLE",
            userIds: userIds,
            Users: {
              connect: userIds.map((userId) => ({ id: userId })),
            },
          },
        });
        chat={...newChat,messages:[]}
      }
      const newUser = await ctx.prisma.user.findUnique({
        where: { id: input.id },
      });
      const modifiedChat = {
        messages: chat?.messages,
        photo: chat?.photo ?? newUser?.image,
        description: chat?.description ?? newUser?.bio,
        groupName: chat?.groupName ?? newUser?.name,
        id: chatId,
      };
      return modifiedChat;
    }),
  sendMessage: protectedProcedure
    .input(
      z.object({
        content: z.string().min(1),
        chatId: z.string().optional(),
        creatorId: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { ctx, input } = opts;
      const id = ctx.session?.user.id;
      if (!input.chatId) {
        const userIds = [input.creatorId, id];
        const chat = await ctx.prisma.chat.create({
          data: {
            type: "SINGLE",
            userIds: userIds,
            Users: {
              connect: userIds.map((userId) => ({ id: userId })),
            },
          },
        });
        input.chatId = chat.id;
      }
      const newMessage = await opts.ctx.prisma.message.create({
        data: {
          content: input.content,
          creatorId: id,
          chatId: input.chatId,
        },
      });
      await pusherServer.trigger(
        toPusherKey(`chat:${id}`),
        "incoming-message",
        newMessage
      );
      await pusherServer.trigger(toPusherKey(`chat:${id}`), "typing", false);
      return newMessage;
    }),

  isTyping: protectedProcedure
    .input(z.object({ typing: z.boolean(), chatId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const id = ctx.session?.user.id;
      const url=toPusherKey(`chat:${id}:${input.chatId}`);
      await pusherServer.trigger(
        url,
        "typing",
        input.typing
      );
    }),
  infinite: publicProcedure
    .input(
      z.object({
        cursor: z.date().nullish(),
        take: z.number().min(1).max(50).nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const take = input.take ?? 10;
      const cursor = input.cursor;

      const page = await ctx.prisma.post.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: take + 1,
        skip: 0,
      });
      const items = page.reverse();
      let prevCursor: null | typeof cursor = null;
      if (items.length > take) {
        const prev = items.shift();
        prevCursor = prev!.createdAt;
      }
      return {
        items,
        prevCursor,
      };
    }),
});

export type ChatRouter = typeof chatRoutes;

export type ChatProcedure<
  T extends keyof ChatRouter["_def"]["procedures"]
> = ChatRouter["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<ChatRouter["_def"]["procedures"][T]>;