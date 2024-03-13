import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Connection from "./Connection";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Application",
  description: "Web 3 description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#010319]'><Connection>
      <Nav />
        <div className="max-w-[1240px] w-full px-4 py-14 mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center">{children}</div></Connection></body>
    </html>
  );
}
