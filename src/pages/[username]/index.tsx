import About from "components/profiles/modes/About/about";
import ProfilePosts from "components/profiles/modes/posts/profile-posts";
import { getDetails, getProfilePosts } from "src/util/profile";
import { useRouter } from "next/router";
import ProfileLayout from "components/layouts/profile-layout";
import { notFound } from "next/navigation";

const UserPosts = () => {
  const router = useRouter();
  const username = router.query.username as string;
  const posts = getProfilePosts(username, "posts");
  if (!posts) {
    const businessProfile = getDetails(username);
    if (businessProfile) return <About details={businessProfile} />;
    else return notFound();
  }

  return (
    <ProfileLayout username={username}>
      <ProfilePosts posts={posts} />;
    </ProfileLayout>
  );
};

export default UserPosts;
