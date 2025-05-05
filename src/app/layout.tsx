import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import "@/assets/styles/tailwindGeneral.css";
import MainHeader from "@/components/ui/MainHeader";
import MainFooter from "@/components/ui/MainFooter";
import { ToastifyProvider } from "@/components/providers/ToastifyProvider";
// import localFont from "@next/font/local";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

// const font = localFont({
//   src: "@/assets/fonts/irsans.ttf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "انتخاب واحد",
  description: "انتخاب واحد",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  console.log("session", session);
  console.log("user", !!user);
  return (
    <>
      <SessionProvider>
        <MainHeader />
        <html lang="en">
          <body className={`antialiased rtl`}>
            <main className="container">{children}</main>
            <ToastifyProvider />
          </body>
        </html>
        <MainFooter />
      </SessionProvider>
    </>
  );
}
