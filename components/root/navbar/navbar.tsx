"use client"
import { brand } from "data/data";
import LargeImage from "components/ui/large-image";
import Link from "next/link";
import { PropsWithChildren } from "react";
const Navbar = ({ children }: PropsWithChildren) => {
    return (
        <nav
            className="sm:h-screen w-screen justify-center sm:w-full bg-black text-white border-seperator 
                        border-r-[1px] p flex flex-row sm:flex-col p-4 sm:justify-start"
        >
            <Link href="/" className="hidden xl:block mb-6 my-2 mx-3">
                <LargeImage src="logo.svg" alt={brand} />
            </Link>
            <Link href="/" className="hidden sm:block xl:hidden mb-6 my-2 mx-1">
                <LargeImage src="favicon-white.ico" alt={brand} className="w-12" />
            </Link>
            {children}
        </nav>
    );
};
  
export default Navbar;
