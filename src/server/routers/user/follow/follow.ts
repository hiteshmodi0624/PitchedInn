import { User } from "@prisma/client";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "~/server/trpc";
export const followRoutes = router({
  getUserFollowers: publicProcedure
    .input(
      z.object({
        username: z.string().optional(),
        id: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .query(async (opts) => {
      const { input, ctx } = opts;
      const { email, username, id } = input;
      const followers = id
        ? await ctx.prisma.user.findUnique({
            where: { id },
            select: { followers: true },
          })
        : email
        ? await ctx.prisma.user.findUnique({
            where: { email },
            select: { followers: true },
          })
        : await ctx.prisma.user.findUnique({
            where: { username },
            select: { followers: true },
          });
      if (!followers) return [];
      const followerProfiles:User[] = [] 
      await Promise.all(
        followers.followers.map(async (follower) => {
          const followerProfile = await ctx.prisma.user.findUnique({
            where: { id: follower },
          });
          if (followerProfile !== null) return followerProfiles.push(followerProfile);
        })
      ); 
      return followerProfiles;
    }),

    getUserFollowing: publicProcedure
    .input(
      z.object({
        username: z.string().optional(),
        id: z.string().optional(),
        email: z.string().optional(),
      })
    )
    .query(async (opts) => {
      const { input, ctx } = opts;
      const { email, username, id } = input;
      const following = id
        ? await ctx.prisma.user.findUnique({
            where: { id },
            select: { following: true },
          })
        : email
        ? await ctx.prisma.user.findUnique({
            where: { email },
            select: { following: true },
          })
        : await ctx.prisma.user.findUnique({
            where: { username },
            select: { following: true },
          });
      if (!following) return [];
      const followingProfiles:User[] = [] 
      await Promise.all(
        following.following.map(async (following) => {
          const followingProfile = await ctx.prisma.user.findUnique({
            where: { id: following },
          });
          if (followingProfile !== null) return followingProfiles.push(followingProfile);
        })
      ); 
      return followingProfiles;
    }),
  isFollowing: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async (opts) => {
      const { input, ctx } = opts;
      const account = await ctx.prisma.user.findUnique({
        where: { username: input.username },
        select: {
          id: true,
          followers: true,
        },
      });
      return account?.followers.includes(ctx.session?.user.id!);
    }),
  followUser: protectedProcedure
    .input(z.object({ username: z.string() }))
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const toFollow = await ctx.prisma.user.findUnique({
        where: { username: input.username },
        select: {
          id: true,
          followers: true,
        },
      });
      const follower = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
        select: {
          id: true,
          following: true,
        },
      });
      if (!toFollow || !follower) return;
      if (follower.following.includes(toFollow.id)) {
        follower.following = follower.following.filter(
          (id) => id !== toFollow.id
        );
        toFollow.followers = toFollow.followers.filter(
          (id) => id !== follower.id
        );
      } else {
        follower.following.push(toFollow.id);
        follower.following = [...new Set(follower.following)];
        toFollow.followers.push(follower.id);
        toFollow.followers = [...new Set(toFollow.followers)];
      }
      await ctx.prisma.user.update({
        where: {
          id: follower.id,
        },
        data: {
          following: { set: follower.following },
        },
      });
      await ctx.prisma.user.update({
        where: {
          id: toFollow.id,
        },
        data: {
          followers: { set: toFollow.followers },
        },
      });
    }),
});
