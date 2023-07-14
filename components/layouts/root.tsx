import { SessionProvider } from "next-auth/react";
import Body from './body';
import ProgressBar from "components/shared/progress-bar/progress-bar";

export default function Layout({
    children
}: {
  children: React.ReactNode,
}) {
    
    return (
      <SessionProvider>
        <div id="modals"></div>

        <div
          className="grid h-full sm:h-screen justify-center gap-6 overflow-x-hidden
  overflow-y-scroll bg-black grid-cols-[1fr] sm:grid-cols-[100px_1fr] sm:px-5 md:grid-cols-[100px_600px] lg:w-full lg:grid-cols-[100px_1fr] lg:px-20 xl:grid-cols-[288px_1fr]"
        >
          <Body>{children}</Body>
        </div>
        <div id="root-notification"></div>
        <ProgressBar />
      </SessionProvider>
    );
}
