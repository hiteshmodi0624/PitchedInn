import FollowList from "./follow-list";
import Footer from "./footer";
import SearchBar from "./search-bar";

function Sidebar() {
    return (
        <div className="sticky top-0 w-ful pl-6 hidden lg:block">
            <SearchBar />
            <FollowList listType="startups" />
            <FollowList listType="collections" />
            <Footer />
        </div>
    );
}

export default Sidebar;
