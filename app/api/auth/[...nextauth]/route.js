import NextAuth from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
//const handler = NextAuth({});
const prisma = new PrismaClient();
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return user;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.sub;

      console.log("session:", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
