"use client";
import AuthNavBar from "@/components/auth/root/auth-nav";
import AuthSideBar from "@/components/auth/root/auth-side-bar";
import RootNav from "@/components/root/navbar/root-nav";
import RootSideBar from "@/components/root/sidebar/sidebar-items/root-sidebar";
import { useSession } from "next-auth/react";
import Sidebar from "../root/sidebar/sidebar";
import Navbar from "../root/navbar/navbar";
import AuthNav from "@/components/auth/root/auth-nav";
import Header from "./header";
import Main from "./main";

export default function Body({ children }: { children: React.ReactNode }) {
    const { status } = useSession();
    var nav=<div></div>
    var side=<div></div>
    var child=<div></div>
    if(status==="authenticated"){
        nav=<RootNav />
        side=<RootSideBar />
        child=<>{children}</>
    } else if (status==="unauthenticated"){
        nav=<AuthNav />
        side=<AuthSideBar />
        child=<>{children}</>
    }
    return (
        <>
            <Header>{nav}</Header>
            <Main>
                {child}
                {side}
            </Main>
        </>
    );
}
