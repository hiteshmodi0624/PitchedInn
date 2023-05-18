import FollowLayout from "components/layouts/follow";
import DetailedProfilesList from "components/ui/list/list";
import { useRouter } from "next/router";
import { getFollowList } from "src/util/lists";

const FollowersList=()=>{
    const followList = getFollowList("collector");
    const router = useRouter()
    const username = router.query.username as string;
    return (
        <FollowLayout username={username}>
            <DetailedProfilesList list={followList}/>
        </FollowLayout>
    );
}
export default FollowersList;
