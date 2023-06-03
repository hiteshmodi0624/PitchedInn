import Feed from "components/feed/feed";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";
import { setProgressBarState } from "~/utils/ui";

export default function Home(props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    setProgressBarState(30);
    return <div></div>;
  }
  if (status === "unauthenticated") {
    router.replace("/auth");
  }
  const posts = trpc.post.fetchAllPosts.useQuery();
  if (!posts.data) {
    setProgressBarState(60);
    return <div></div>;
  }

  setProgressBarState(100);
  return <Feed page="Home" posts={posts.data} />;
}
