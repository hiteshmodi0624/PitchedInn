import { useState } from "react";
import Posts from "./posts/posts";
import Modes from "../shared/mode/modes";
import ContentLayout from "../shared/content-layout/content-layout";
import { PostRouterProcedure } from "~/server/routers/post/post";

function Feed({
  page,
  posts,
}: {
  page: string;
  posts: PostRouterProcedure<"fetchAllPosts">;
}) {
  const [feedMode, setMode] = useState("All Posts");
  const setFeedMode = (mode: string) => {
    setMode(mode);
  };
  const modes = (
    <Modes
      setMode={setFeedMode}
      mode={feedMode}
      modes={["All Posts", "Entrepreneur"]}
    />
  );
  return (
    <ContentLayout page={page} headerContent={modes}>
      {feedMode === "All Posts" && <Posts posts={posts} />}
    </ContentLayout>
  );
}

export default Feed;
