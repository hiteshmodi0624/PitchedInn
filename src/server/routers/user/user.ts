import { inferProcedureOutput } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router, protectedProcedure } from '../../../server/trpc';
import { hash, compare } from "bcrypt";
import {
  emailExistsSchema,
  loginInputSchema,
  registerInputSchema,
  usernameExistsSchema,
  modifyUserSchema,
} from "./schema";
import { User } from "@prisma/client";
import { randomBytes } from "crypto";
import snakeText from "../../../utils/snake-text";
import { followRoutes } from "./follow/follow";
import { chatRoutes } from "./chat/chat";
import { notificationRoutes } from "./notification/notification";
export const userRouter = router({
  register: publicProcedure
    .input(z.object(registerInputSchema))
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const passwordHash = await hash(input.password, 12);
      const user = await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          username: input.username,
          password: passwordHash,
          dob: input.dob,
        },
      });
      return user;
    }),
  login: publicProcedure
    .input(z.object(loginInputSchema))
    .query(async (opts) => {
      const { input, ctx } = opts;
      var user: User | null;
      if (z.string().email().safeParse(input.emailOrUsername).success)
        user = await ctx.prisma.user.findUnique({
          where: { email: input.emailOrUsername },
        });
      else {
        user = await ctx.prisma.user.findUnique({
          where: { username: input.emailOrUsername },
        });
      }
      if (!user || !user.password) {
        throw new Error("User Not Found");
      }
      const passwordMatched = await compare(input.password, user.password);
      if (!passwordMatched) {
        throw new Error("Invalid password");
      }
      return user;
    }),
  usernameExists: publicProcedure
    .input(usernameExistsSchema)
    .query(async (opts) => {
      const { input, ctx } = opts;
      const user = await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });
      return user ? true : false;
    }),
  emailExists: publicProcedure.input(emailExistsSchema).query(async (opts) => {
    const { input, ctx } = opts;
    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    });
    return user ? true : false;
  }),
  getUserInfo: publicProcedure
    .input(
      z.object({
        email: z.string().email().optional(),
        username: z.string().optional(),
        id: z.string().optional(),
      })
    )
    .query(async (opts) => {
      const { input, ctx } = opts;
      const { email, id, username } = input;
      const user = email
        ? await ctx.prisma.user.findUnique({
            where: { email },
          })
        : username
        ? await ctx.prisma.user.findUnique({
            where: { username },
          })
        : await ctx.prisma.user.findUnique({
            where: { id },
          });
      return user;
    }),
  setRandomUsername: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async (opts) => {
      const email = opts.input.email;
      const userInfo = await opts.ctx.prisma.user.findUniqueOrThrow({
        where: { email: email },
      });
      var username = userInfo?.username;
      if (username) return userInfo;
      if (email && userInfo && !username) {
        const { name } = userInfo;
        username = (name ? snakeText(name) : email?.split("@")[0]) ?? "user_";
        var found = await opts.ctx.prisma.user.findUnique({
          where: { username },
        });
        while (username && found) {
          const newUserName: string = username + randomBytes(6).toString("hex");
          found = await opts.ctx.prisma.user.findUnique({
            where: { username: newUserName },
          });
          if (!found) username = newUserName;
        }
        return await opts.ctx.prisma.user.update({
          data: { username },
          where: { email: email },
        });
      }
      return null;
    }),
  modifyUser: protectedProcedure
    .input(modifyUserSchema)
    .mutation(async (opts) => {
      const { input, ctx } = opts;
      const { name, username, bio, dob, userType } = input;
      const user = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.user.id },
      });
      if (!user) throw new Error("User not found");
      return await ctx.prisma.user.update({
        data: { bio, dob, name, username, userType },
        where: {
          id: ctx.session.user.id,
        },
      });
    }),
  getAllUsers: publicProcedure.query(async(opts)=>{
    const { input, ctx } = opts;
    return await ctx.prisma.user.findMany();
  }),
  follow: followRoutes,
  chat: chatRoutes,
  notification: notificationRoutes,
});
export type UserRoutes = typeof userRouter;

export type UserRouterProcedure<
  T extends keyof UserRoutes["_def"]["procedures"]
> = UserRoutes["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<UserRoutes["_def"]["procedures"][T]>;
