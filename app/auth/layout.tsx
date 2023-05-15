"use client";
import Sidebar from "../../components/root/sidebar/sidebar";
import Feed from "@/components/feed/feed";
import AuthNavBar from "./components/auth-nav-icons";
import AuthBottom from "./components/auth-bottom";
import AuthSideBar from "./components/auth-side-bar";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <> 
            <div
                className="grid xl:grid-cols-[288px_1fr_384px] lg:grid-cols-[100px_1fr_340px] md:grid-cols-[100px_600px] sm:grid-cols-[100px_1fr]
  bg-black h-screen sm:px-5 justify-center lg:w-full lg:px-20 overflow-y-scroll "
            >
                <header className="sm:sticky sm:top-0 fixed bottom-0 z-40">
                    <AuthNavBar/>
                </header>
                <main className="text-white justify-center flex flex-row h-auto">
                    <Feed page="Explore" />
                </main>
                <AuthSideBar/>
            </div>
            {children}
        </>
    );
}
