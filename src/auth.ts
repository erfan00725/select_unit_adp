import { authConfig } from "./auth.config";
import NextAuth, { CredentialsSignin } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "@/lib/actions";
import bcrypt from "bcryptjs";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        userName: { label: "نام کاربری", type: "text" },
        password: { label: "رمز عبور", type: "password" },
      },
      name: "Credentials",
      authorize: async (credentials) => {
        const user = await getUserByUsername(credentials?.userName as string);
        if (!user.user) {
          throw new CredentialsSignin("نام کاربری یا رمز عبور اشتباه است");
        }
        const pass = credentials?.password as string;
        if (!(await bcrypt.compare(pass, user.user.Password))) {
          throw new CredentialsSignin("نام کاربری یا رمز عبور اشتباه است");
        }

        return user.user;
      },
    }),
  ],
});
