import '@/styles/globals.css'

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
              <div id="root-backdrop"></div>
              <div id="root-overlay"></div>
              {children}
              <div id="root-notification"></div>
          </body>
      </html>
  );
}
