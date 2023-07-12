import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../../../../server/trpc";
import { pusherServer } from "../../../../server/pusher";
import { toPusherKey } from "../../../../utils/pusher";
import { Notification } from "@prisma/client";
import { inferProcedureOutput } from "@trpc/server";
import { getPresignedUrl } from "~/utils/presigned-url";

export const notificationRoutes = router({
  getUserNotifications: protectedProcedure.query(async (opts) => {
    const { ctx } = opts;
    const id = ctx.session?.user.id;
    const postInclude = {
      include: {
        post: {
          select: {
            mediaUrl: true,
            id: true,
          },
        },
      },
    };
    const res = await ctx.prisma.user.findUnique({
      where: { id },
      select: {
        notification: {
          include: {
            collect: postInclude,
            comment: postInclude,
            like: postInclude,
          },
          orderBy:{
            createdAt:"desc"
          }
        },
      },
    });
    if (!res) return null;
    const notifications = await Promise.all(
      res.notification.map(async (item) => {
        if (item.collect) {
          item.collect.post.mediaUrl = await Promise.all(
            item.collect.post.mediaUrl.map(
              async (url) => await getPresignedUrl(url)
            )
          );
        }
        if (item.like) {
          item.like.post.mediaUrl = await Promise.all(
            item.like.post.mediaUrl.map(
              async (url) => await getPresignedUrl(url)
            )
          );
        }
        if (item.comment) {
          item.comment.post.mediaUrl = await Promise.all(
            item.comment.post.mediaUrl.map(
              async (url) => await getPresignedUrl(url)
            )
          );
        }
        return item;
      })
    );
    return notifications;
  }),
  getUserNotificationById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const { ctx,input } = opts;
      const id = input.id;
      const postInclude = {
        include: {
          post: {
            select: {
              mediaUrl: true,
              id: true,
            },
          },
        },
      };
      const res = await ctx.prisma.notification.findUnique({
        where: { id },
        include: {
          collect: postInclude,
          comment: postInclude,
          like: postInclude,
        },
      });
      return res;
    }),
});


export type NotificationRouter = typeof notificationRoutes;

export type NotificationProcedure<
  T extends keyof NotificationRouter["_def"]["procedures"]
> = NotificationRouter["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<NotificationRouter["_def"]["procedures"][T]>;
