// auth.ts
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession } from "next-auth";

import { prisma } from "@/lib/prixma"; 

export const authOptions = {
 adapter: PrismaAdapter(prisma), 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
