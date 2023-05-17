"use client"
import AuthNavBar from '@/components/auth/root/auth-nav-bar';
import AuthSideBar from '@/components/auth/root/auth-side-bar';
import Feed from '@/components/feed/feed';
import RootNav from '@/components/root/navbar/root-nav';
import RootSideBar from '@/components/root/sidebar/sidebar-items/root-sidebar';
import '@/styles/globals.css'
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname() as string;
  const location = pathname.split("/").filter(Boolean);
  const auth = location[0]==="auth"
  return (
      <html lang="en">
          <body>
              <div id="root-backdrop"></div>
              <div id="root-overlay"></div>
              <div
                  className="grid xl:grid-cols-[288px_1fr] lg:grid-cols-[100px_1fr] md:grid-cols-[100px_600px] sm:grid-cols-[100px_1fr]
  bg-black h-screen sm:px-5 justify-center lg:w-full lg:px-20 overflow-y-scroll gap-6"
              >
                  <header className="sm:sticky sm:top-0 fixed bottom-0 z-50">
                      {auth ? <AuthNavBar /> : <RootNav />}
                  </header>
                  <main
                      className="grid xl:grid-cols-[1fr_384px] lg:grid-cols-[1fr_340px] md:grid-cols-[600px] sm:grid-cols-[1fr]
          text-white justify-center gap-6 relative h-screen"
                  >
                      {!auth ? children : <Feed page="Explore" />}
                      {auth ? <AuthSideBar /> : <RootSideBar />}
                  </main>
              </div>
              <div id="root-notification">{auth && children}</div>
          </body>
      </html>
  );
}
