import ProfilePosts from "components/profiles/modes/posts/profile-posts";
import ProfileLayout from "components/layouts/profile-layout";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";
import { setProgressBarState } from "~/utils/ui";

const UserPitches = ({}) => {
  const router = useRouter();
  const username = router.query.username as string;
  const getPosts = trpc.post.fetchAllPostsByUsername.useQuery({ username });
  setProgressBarState(40)
  if (getPosts.isLoading) {
    return <div></div>
  }
  setProgressBarState(100)
  if (!getPosts.data) {
    router.replace("404");
    return <div></div>;
  }
  return (
    <ProfileLayout username={username}>
      <ProfilePosts posts={getPosts.data} />
    </ProfileLayout>
  );
};

export default UserPitches;