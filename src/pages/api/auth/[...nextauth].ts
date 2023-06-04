import { prisma } from "src/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { GetServerSidePropsContext } from "next";
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { appRouter } from "~/server/routers/route";
import { randomBytes } from "crypto";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      id: "register",
      name: "PitchedInn",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "emo;" },
        dob: { label: "Name", type: "text" },
        name: { label: "Date of Birth", type: "date" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const caller = appRouter.createCaller({ prisma, session: null });
        const newDate = new Date(credentials.dob);
        const user = await caller.user.register({
          dob: new Date(
            newDate.getTime() - newDate.getTimezoneOffset() * 60000
          ),
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
          username: credentials.username,
        });
        if (user) {
          return {
            email: user.email,
            name: user.name,
            id: user.id,
          };
        }
        return null;
      },
    }),
    CredentialsProvider({
      id: "login",
      name: "PitchedInn",
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "emo;" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const caller = appRouter.user.createCaller({ prisma, session: null });
        const user = await caller.login({
          emailOrUsername: credentials.email,
          password: credentials.password,
        });
        if (user) {
          return {
            email: user.email,
            name: user.name,
            id: user.id,
          };
        }
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      const caller = appRouter.user.createCaller({ prisma, session: null });
      const userInfo = await caller.setRandomUsername({ email: session.user.email });
      const newSession = {
        ...session,
        user: {
          ...user,
          username: userInfo?.username,
          userType: userInfo?.userType,
          image: userInfo?.image,
          id: userInfo?.id,
          email:userInfo?.email
        },
      };
      return newSession;
    },
  },
};
const handler = NextAuth(authOptions);
export default handler;

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
