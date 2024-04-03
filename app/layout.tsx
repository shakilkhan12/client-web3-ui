import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Connection from "./Connection";
import Nav from "@/components/Nav";
import Image from "next/image";
import ReduxProvider from "@/store/Provider";

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
      <body className='bg-[#010319] relative'>
        <ReduxProvider>
        <Connection>
      <Nav />
      <div className="absolute left-0 top-0 w-full h-full -z-[999]">
        <Image
          src="/images/bg.png"
          fill
          className="w-full h-full object-cover"
          alt="line"
        />
      </div>
      {/* <div className="absolute right-0 bottom-0 w-full xl:w-[1170px] h-[645px] -z-[999]">
        <Image
          src="/images/blueLine.png"
          fill
          className="w-full h-full object-contain rotate-180"
          alt="line"
        />
      </div> */}
        <div className="max-w-[1240px] w-full px-2 py-14 mx-auto min-h-[calc(100vh-100px)] flex items-center justify-center">{children}</div></Connection></ReduxProvider></body>
    </html>
  );
}
