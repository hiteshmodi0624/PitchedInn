"use client"
import { SessionProvider, useSession } from "next-auth/react";
import Body from './body';

export default function Layout({
    children
}: {
  children: React.ReactNode,
}) {
    
    return (
        <html lang="en">
            <SessionProvider>
                <body className="w-screen overflow-hidden">
                    <div id="root-backdrop"></div>
                    <div id="root-overlay"></div>

                    <div
                        className="grid h-screen justify-center gap-6 overflow-y-scroll
  bg-black sm:grid-cols-[100px_1fr] sm:px-5 md:grid-cols-[100px_600px] lg:w-full lg:grid-cols-[100px_1fr] lg:px-20 xl:grid-cols-[288px_1fr] overflow-x-hidden"
                    >
                        <Body>{children}</Body>
                    </div>
                    <div id="root-notification"></div>
                </body>
            </SessionProvider>
        </html>
    );
}
