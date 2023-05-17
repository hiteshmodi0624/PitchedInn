"use client"
import DetailedProfilesList from "@/components/ui/list/list";
import { getFollowList } from "@/util/lists";

const FollowersList=({params}:{params:{username:string}})=>{
    const followList = getFollowList("business");
    return (
        <>
            <DetailedProfilesList list={followList}/>
        </>
    );
}
export default FollowersList;
