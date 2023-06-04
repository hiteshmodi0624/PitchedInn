import { PropsWithChildren } from "react";
import Navbar from "../../root/navbar/navbar";

const Header=({children}:PropsWithChildren)=>{
    return <header className="fixed bottom-0 z-50 sm:sticky sm:top-0">
        <Navbar>{children}</Navbar>
    </header>;
}
export default Header