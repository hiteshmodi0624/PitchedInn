import FollowLayout from "components/layouts/follow";
import DetailedProfilesList from "components/ui/list/list";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";
const FollowersList = ({}) => {
  const router = useRouter();
  const username = router.query.username as string;
  const followersQuery = trpc.user.follow.getUserFollowers.useQuery({
    username,
  });
  return (
    <FollowLayout username={username}>
      {followersQuery.isFetching || followersQuery.data === undefined ? (
        <div></div>
      ) : (
        <DetailedProfilesList list={followersQuery.data} />
      )}
    </FollowLayout>
  );
};
export default FollowersList;
