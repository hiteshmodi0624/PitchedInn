import { inferProcedureOutput } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "~/server/trpc";

const createPostInputSchema = z.object({
  caption: z.string(),
  mediaType: z.enum(["Pitch", "Images"]),
  mediaUrl: z.string().array(),
  creatorId: z.string(),
});

export const postRouter = router({
  createPost: protectedProcedure
    .input(createPostInputSchema)
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const newPost = await ctx.prisma.post.create({
        data: input,
      });
      return newPost;
    }),
  fetchAllPosts: publicProcedure.query(async (opts) => {
    const posts = await opts.ctx.prisma.post.findMany({
      include: {
        collect: true,
        comment: true,
        save: true,
        creator: true,
        like: true,
      },
    });
    return posts;
  }),
  findPostById: publicProcedure
    .input(z.object({ postId: z.string() }))
    .query(async (opts) => {
      const post = await opts.ctx.prisma.post.findUnique({
        where: {
          id: opts.input.postId,
        },
        include: {
          collect: true,
          comment: true,
          save: true,
          creator: true,
          like: true,
        },
      });
      return post;
    }),
});

export type PostRouter = typeof postRouter;

export type PostRouterProcedure<
  T extends keyof PostRouter["_def"]["procedures"]
> = PostRouter["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<PostRouter["_def"]["procedures"][T]>;
