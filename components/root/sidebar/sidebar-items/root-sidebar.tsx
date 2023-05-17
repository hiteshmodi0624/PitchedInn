import Sidebar from "../sidebar";
import FollowList from "./follow-list";

function RootSideBar() {
    return (
        <Sidebar>
            <FollowList listType="collector" />
            <FollowList listType="business" />
        </Sidebar>
    );
}

export default RootSideBar;
