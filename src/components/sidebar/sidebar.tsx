import FollowList from "./follow-list";
import Footer from "./footer";
import SearchBar from "./search-bar";

function Sidebar() {
    return (
        <div className="sticky top-0 ">
            <SearchBar/>
            <FollowList listType="startups"/>
            <FollowList listType="collections"/>
            <Footer/>
        </div>
    );
  }
  
  export default Sidebar;
  