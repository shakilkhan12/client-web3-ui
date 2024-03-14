"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import WalletButton from "./WalletButton";


const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full bg-[#06112A] relative">
      <div className="max-w-[1240px] mx-auto w-full px-5 h-[100px] flex items-center justify-between space-x-5">
        <Link href="/" className="flex items-center gap-5">
          <Image alt="logo" src="/images/footer-logo.png" width={55} height={55} />
          <h2
            style={{
              backgroundImage:
                "linear-gradient(to right, #066C9C 0%, #066C9C 10%, #00E1D2 50%)",
            }}
            className=" bg-clip-text text-[24px] font-bold text-transparent relative inline-block uppercase"
          >
            liquiflx
          </h2>
        </Link>
        {/* desktop links */}
        <ul className="hidden md:flex items-center space-x-[66px]">
          <Link
            href="/swap"
            className="text-lg font-normal text-white capitalize focus:text-white hover:text-white"
          >
            swap
          </Link>
          <Link
            href="/"
            className="text-lg font-normal text-white capitalize focus:text-white hover:text-white"
          >
            pools
          </Link>
          <Link
            href="/"
            className="text-lg font-normal text-white capitalize focus:text-white hover:text-white"
          >
            dashboard
          </Link>
          <Link
            href="/"
            className="text-lg font-normal text-white capitalize focus:text-white hover:text-white"
          >
            more
          </Link>
        </ul>
        {/* mobile links */}
        {toggle && (
          <ul className="z-[999999] bg-[#010319] pb-5 flex md:hidden flex-col w-full absolute right-0 top-full ">
            <Link
              href="/swap"
              className="text-lg font-normal hover:bg-[#113253]/30 px-5 py-3 block w-full text-white capitalize focus:text-white hover:text-white transition-all duration-300 hover:pl-7"
            >
              swap
            </Link>
            <Link
              href="/"
              className="text-lg font-normal hover:bg-[#113253]/30 px-5 py-3 block w-full text-white capitalize focus:text-white hover:text-white transition-all duration-300 hover:pl-7"
            >
              pools
            </Link>
            <Link
              href="/"
              className="text-lg font-normal hover:bg-[#113253]/30 px-5 py-3 block w-full text-white capitalize focus:text-white hover:text-white transition-all duration-300 hover:pl-7"
            >
              dashboard
            </Link>
            <Link
              href="/"
              className="text-lg font-normal hover:bg-[#113253]/30 px-5 py-3 block w-full text-white capitalize focus:text-white hover:text-white transition-all duration-300 hover:pl-7"
            >
              more
            </Link>
            <li className="px-5 mt-4">
            <WalletButton />
            </li>
          </ul>
        )}
   
        <WalletButton />
        {/* <button className="cursor-pointer bg-gradient-to-r from-[#066C9C] via-[#01ADED] to-[#00E1D2] rounded-[40px] h-[54px] px-6 capitalize text-lg text-white hidden md:block">
          connect wallet
        </button> */}
        <GiHamburgerMenu
          onClick={() => setToggle(!toggle)}
          className="text-white cursor-pointer block md:hidden text-xl"
        />
      </div>
    </nav>
  );
};

export default Nav;
