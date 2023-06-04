import { inferProcedureOutput } from "@trpc/server";
import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "~/server/trpc";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomBytes } from "crypto";
import s3 from "~/server/s3";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const createPostInputSchema = z.object({
  caption: z.string(),
  mediaType: z.enum(["Pitch", "Images"]),
  mediaUrl: z.string().array(),
});

export const postRouter = router({
  createPost: protectedProcedure
    .input(createPostInputSchema)
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const newPost = await ctx.prisma.post.create({
        data: {
          ...input,
          creatorId: ctx.session.user.id,
        },
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
    for (const post of posts) {
      const command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: post.mediaUrl[0],
      });
      const url = await getSignedUrl(s3, command, { expiresIn: 600 });
      post.mediaUrl = [url];
    }
    return posts;
  }),
  fetchAllPithches: publicProcedure.query(async (opts) => {
    const posts = await opts.ctx.prisma.post.findMany({
      include: {
        collect: true,
        comment: true,
        save: true,
        creator: true,
        like: true,
      },
      where:{
        mediaType:"Pitch"
      }
    });
    for (const post of posts) {
      const command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: post.mediaUrl[0],
      });
      const url = await getSignedUrl(s3, command, { expiresIn: 600 });
      post.mediaUrl = [url];
    }
    return posts;
  }),
  fetchAllPostsByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async (opts) => {
      const {prisma}=opts.ctx
      const {username}=opts.input;
      const user=await prisma.user.findUnique({where:{username}})
      if(user){
        const posts = await prisma.post.findMany({
          where:{
            creatorId:user.id
          }
        });
        for (const post of posts) {
          const command = new GetObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: post.mediaUrl[0],
          });
          const url = await getSignedUrl(s3, command, { expiresIn: 600 });
          post.mediaUrl = [url];
        }
        return posts;
      }
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
  getSignedUrl: protectedProcedure.query(async (opts) => {
    const rawBytes = randomBytes(32);
    const imageName = rawBytes.toString("hex");

    const url = await getSignedUrl(
      s3,
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: imageName,
      })
    );
    return {
      url,
      imageName,
    };
  }),
});

export type PostRouter = typeof postRouter;

export type PostRouterProcedure<
  T extends keyof PostRouter["_def"]["procedures"]
> = PostRouter["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<PostRouter["_def"]["procedures"][T]>;
