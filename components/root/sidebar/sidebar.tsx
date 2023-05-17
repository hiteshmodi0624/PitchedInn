"use client";
import Footer from "./footer";
import SearchBar from "../../shared/search/search-bar";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

function Sidebar({ children }: PropsWithChildren) {
    const [containerTop, setContainerTop] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById("side-bar");
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const screenHeight = document.body.getBoundingClientRect().height;
      setContainerTop(Math.min(0,screenHeight-containerHeight-10));
    }
    if (containerRef.current) {
        containerRef.current.style.top = `${containerTop}px`;
      }
  }, [containerRef,containerTop]);
    return (
        <div className="h-full flex w-full flex-col">
            <div  id="side-bar" className={`sticky w-full pl-6 hidden lg:block`} ref={containerRef}>
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
