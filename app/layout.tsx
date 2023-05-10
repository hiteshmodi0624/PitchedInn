
import '@/styles/globals.css'
import Navbar from './(root)/components/navbar/navbar';
import Sidebar from './(root)/components/sidebar/sidebar';

export const metadata = {
  title: 'PitchedInn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body>
              <div
                  className="grid xl:grid-cols-[288px_1fr_384px] lg:grid-cols-[100px_1fr_340px] md:grid-cols-[100px_600px] sm:grid-cols-[100px_1fr]
         bg-black h-screen sm:px-5 justify-center lg:w-full lg:px-20 overflow-y-scroll "
              >
                  <header className="sm:sticky sm:top-0 fixed bottom-0 z-50">
                      <Navbar />
                  </header>
                  <main className="text-white justify-center flex flex-row h-auto">
                      {children}
                  </main>
                  <Sidebar />
              </div>
          </body>
      </html>
  );
}
