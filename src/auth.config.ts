import { homeUrl } from "@/constants/urls";
import { type NextAuthConfig } from "next-auth";
import { User } from "./generated/prisma";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("auth", auth);
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = [homeUrl];
      const isProtectedRoute = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );
      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        // Explicitly redirect to login page with callbackUrl
        return false;
      } else if (isLoggedIn && nextUrl.pathname === "/login") {
        return Response.redirect(new URL(homeUrl, nextUrl));
      }
      return true;
    },
    async session({ token, session, user }) {
      session.user.id = (token.user as User).id;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },

  session: {
    strategy: "jwt",
  },

  providers: [],
} satisfies NextAuthConfig;
