import { prisma } from "src/server/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { GetServerSidePropsContext } from "next";
import NextAuth, { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const authOptions:NextAuthOptions={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(prisma)
}
const handler = NextAuth(authOptions);
export default handler


export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};