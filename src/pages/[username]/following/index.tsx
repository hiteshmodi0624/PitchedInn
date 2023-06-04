import FollowLayout from "components/layouts/follow";
import DetailedProfilesList from "components/ui/list/list";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";
const FollowingList = ({}) => {
  const router = useRouter();
  const username = router.query.username as string;
  const followingQuery = trpc.user.follow.getUserFollowing.useQuery({
    username,
  });
  return (
    <FollowLayout username={username}>
      {followingQuery.isFetching || followingQuery.data === undefined ? (
        <div></div>
      ) : (
        <DetailedProfilesList list={followingQuery.data} />
      )}
    </FollowLayout>
  );
};
export default FollowingList;
