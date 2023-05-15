import FollowList from "./follow-list";

function SidebarItems() {
    return (
        <>
            <FollowList listType="startups" />
            <FollowList listType="collections" />
        </>
    );
}

export default SidebarItems;
