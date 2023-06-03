import Posts from "components/feed/posts/posts";
import ContentLayout from "components/shared/content-layout/content-layout";
import { trpc } from "~/utils/trpc";
import { setProgressBarState } from "~/utils/ui";

export default function Pitches() {
  const posts = trpc.post.fetchAllPosts.useQuery().data;
  if (!posts) {
    setProgressBarState(60);
    return <div></div>;
  }
  setProgressBarState(100);
  return (
    <>
      <ContentLayout page="Pitches">
        <Posts posts={posts} />
      </ContentLayout>
    </>
  );
}
