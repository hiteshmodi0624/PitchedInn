import Feed from "components/feed/feed";
import AuthBottom from "components/auth/root/auth-bottom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { setProgressBarState } from "~/utils/ui";
import ContentLayout from "components/shared/content-layout/content-layout";
import Posts from "components/feed/posts/posts";
import { trpc } from "~/utils/trpc";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    setProgressBarState(30);
    return <div></div>;
  }
  if (status === "authenticated") {
    router.replace("/");
  }
  const posts = trpc.post.fetchAllPosts.useQuery();
  if (posts.data === undefined) {
    setProgressBarState(60);
    return <div></div>;
  }
  setProgressBarState(100);
  return (
    <>
      <ContentLayout page="Explore">
        <Posts posts={posts.data} />
        <AuthBottom />
      </ContentLayout>
    </>
  );
}
