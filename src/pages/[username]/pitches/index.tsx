import ProfilePosts from "components/profiles/modes/posts/profile-posts";
import { getDetails, getProfilePosts } from "src/util/profile";
import ProfileLayout from "components/layouts/profile-layout";
import { useRouter } from "next/router";

const UserPitches = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const posts = getProfilePosts(username, "posts");
  if (!posts) return router.replace(`/${username}`);
  return (
    <ProfileLayout username={username}>
      <ProfilePosts posts={posts} />
    </ProfileLayout>
  );
};

export default UserPitches;
