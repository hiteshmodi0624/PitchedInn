import { brand } from "data/data";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
const Navbar = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [messagesPage,setMessagePage]=useState(false);
  useEffect(() => {
    if (router.pathname.includes("messages")) {
      setMessagePage(true);
    } else {
      setMessagePage(false);
    }
  }, [router]);
  return (
    <nav
      className={`p flex w-screen flex-row justify-center border-r-[1px] border-seperator 
        bg-black p-2 text-white sm:h-screen sm:w-full sm:flex-col sm:justify-start sm:p-4 ${
          messagesPage ? "hidden" : "block"
        } sm:block`}
    >
      <Link href="/" className="mx-3 my-2 mb-6 hidden xl:block">
        <Image width={300} height={300} src="/logo.svg" alt={brand} />
      </Link>
      <Link href="/" className="mx-1 my-2 mb-6 hidden sm:block xl:hidden">
        <Image
          width={300}
          height={300}
          src="/favicon-white.ico"
          alt={brand}
          className="w-12"
        />
      </Link>
      {children}
    </nav>
  );
};

export default Navbar;
