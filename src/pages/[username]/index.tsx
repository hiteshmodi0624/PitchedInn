import ProfilePosts from "components/profiles/modes/posts/profile-posts";
import { useRouter } from "next/router";
import ProfileLayout from "components/layouts/profile-layout";
import { notFound } from "next/navigation";
import { trpc } from "~/utils/trpc";

const UserPosts = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const getPosts=trpc.post.fetchAllPostsByUsername.useQuery({username});
  if (!getPosts.data) {
    // const businessProfile = getDetails(username);
    // if (businessProfile) return <About details={businessProfile} />;
    // else return notFound();
    return <></>
  }

  return (
    <ProfileLayout username={username}>
      <ProfilePosts posts={getPosts.data} />
    </ProfileLayout>
  );
};

export default UserPosts;
