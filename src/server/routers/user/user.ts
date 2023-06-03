import { inferProcedureOutput } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "~/server/trpc";
import { hash, compare } from "bcrypt";
import {
  emailExistsSchema,
  loginInputSchema,
  registerInputSchema,
  usernameExistsSchema,
} from "./schema";
import { User } from "@prisma/client";

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
  getUserInfoFromEmail: publicProcedure.input(emailExistsSchema).query(async (opts) => {
    const { input, ctx } = opts;
    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    });
    return user;
  }),
  getUserInfoFromId: publicProcedure.input(z.object({id:z.string()})).query(async (opts) => {
    const { input, ctx } = opts;
    const user = await ctx.prisma.user.findUnique({
      where: { id: input.id },
    });
    return user;
  }),
  getUserInfoFromUsername: publicProcedure.input(z.object({username:z.string()})).query(async (opts) => {
    const { input, ctx } = opts;
    const user = await ctx.prisma.user.findUnique({
      where: { username: input.username },
    });
    return user;
  }),
});
export type UserRoutes = typeof userRouter;

export type UserRouterProcedure<
  T extends keyof UserRoutes["_def"]["procedures"]
> = UserRoutes["_def"]["procedures"][T] extends never
  ? never
  : inferProcedureOutput<UserRoutes["_def"]["procedures"][T]>;
