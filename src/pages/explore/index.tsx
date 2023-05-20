import Feed from "components/feed/feed";
import { trpc } from "~/utils/trpc";
import { setProgressBarState } from "~/utils/ui";

export default function Explore() {
    const posts = trpc.post.fetchAllPosts.useQuery().data;
    if (!posts) {
        setProgressBarState(60);
        return <div></div>;
      }
    setProgressBarState(100);
    return (
        <Feed page="Explore" posts={posts}/>
    );
  }
