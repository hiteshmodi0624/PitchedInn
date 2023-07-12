import { User } from "@prisma/client";
import { z } from "zod";
import {
  protectedProcedure,
  publicProcedure,
  router,
} from "../../../server/trpc";
import { toPusherKey } from "~/utils/pusher";
import { pusherServer } from "~/server/pusher";
export const interactionsRoutes = router({
  likePost: protectedProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const like = await ctx.prisma.like.findFirst({
        where:{
          postId:input.postId,
          userId:ctx.session.user.id
        }
      })
      const post = await ctx.prisma.post.findUnique({
        where:{
          id:input.postId
        }
      })
      if(!post) return null;
      const userId=ctx.session.user.id
      if(like){
        await ctx.prisma.like.deleteMany({
          where:{
            postId:input.postId,
            userId
          }
        })
        await ctx.prisma.notification.deleteMany({
          where:{
            action:"LIKE",
            notifierId:userId,
            userId:post.creatorId,
          }
        })
      } else {
        const Like=await ctx.prisma.like.create({
          data:{
            postId:input.postId,
            userId
          }
        })
        const notification=await ctx.prisma.notification.create({
          data:{
            action:"LIKE",
            notifierId:userId,
            userId:post.creatorId,
            likeId:Like.id,
          }
        })
        const url = toPusherKey(`notification:${post.creatorId}`);
        await pusherServer.trigger(url, "notification", notification);
      }
    }),
});
