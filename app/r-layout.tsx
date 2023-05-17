import RootNav from "@/components/root/navbar/root-nav";
import RootSideBar from "@/components/root/sidebar/sidebar-items/root-sidebar";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="grid xl:grid-cols-[288px_1fr] lg:grid-cols-[100px_1fr] md:grid-cols-[100px_600px] sm:grid-cols-[100px_1fr]
  bg-black h-screen sm:px-5 justify-center lg:w-full lg:px-20 overflow-y-scroll gap-6"
        >
            <header className="sm:sticky sm:top-0 fixed bottom-0 z-50">
                <RootNav />
            </header>
            <main
                className="grid xl:grid-cols-[1fr_384px] lg:grid-cols-[1fr_340px] md:grid-cols-[600px] sm:grid-cols-[1fr]
          text-white justify-center gap-6 relative h-screen"
            >
                {children}
                <RootSideBar />
            </main>
        </div>
    );
}
