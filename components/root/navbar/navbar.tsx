"use client"
import { brand } from "data/data";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
const Navbar = ({ children }: PropsWithChildren) => {
    return (
      <nav
        className="p flex w-screen flex-row justify-center border-r-[1px] border-seperator 
                        bg-black p-4 text-white sm:h-screen sm:w-full sm:flex-col sm:justify-start"
      >
        <Link href="/" className="mx-3 my-2 mb-6 hidden xl:block">
          <Image width={300} height={300} src="/logo.svg" alt={brand} />
        </Link>
        <Link href="/" className="mx-1 my-2 mb-6 hidden sm:block xl:hidden">
          <Image width={300} height={300} src="/favicon-white.ico" alt={brand} className="w-12" />
        </Link>
        {children}
      </nav>
    );
};
  
export default Navbar;
