import FollowList from "./follow-list";

function SidebarItems() {
    return (
        <>
            <FollowList listType="collector" />
            <FollowList listType="business" />
        </>
    );
}

export default SidebarItems;
