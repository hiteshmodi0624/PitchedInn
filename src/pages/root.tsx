import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const Root = () => {
    return (
        <div className="grid grid-cols-[288px_1fr_366px] bg-black h-screen px-20 overflow-scroll">
            <header className="sticky top-0">
                <Navbar />
            </header>
            <main className="text-white justify-center flex flex-row h-auto">
                <Outlet />
            </main>
            <Sidebar />
        </div>
    );
};

export default Root;
