import Footer from "./footer";
import SearchBar from "../../shared/search/search-bar";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

function Sidebar({ children }: PropsWithChildren) {

    useEffect(() => {
      const sidebar = document.getElementById("side-bar");
      const screenHeight = document.body.getBoundingClientRect().height;
      if (sidebar) {
          const containerHeight = sidebar.getBoundingClientRect().height;
          sidebar.style.top = `${Math.min(0, screenHeight - containerHeight - 10)}px`;
      }
    },[]);
    return (
        <div className="h-full w-full flex-col hidden lg:flex">
            <div  id="side-bar" className={`sticky w-full pl-6 `}>
                <SearchBar
                    placeholder="Search Startups or Collections"
                    className="border-transparent"
                />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;
