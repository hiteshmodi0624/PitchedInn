"use client";
import Footer from "./footer";
import SearchBar from "../../shared/search/search-bar";
import { PropsWithChildren } from "react";

function Sidebar({ children }: PropsWithChildren) {
    return (
        <div className="sticky top-0 w-ful pl-6 hidden lg:block">
            <SearchBar placeholder="Search Startups or Collections" className="border-transparent"/>
            {children}
            <Footer />
        </div>
    );
}

export default Sidebar;
