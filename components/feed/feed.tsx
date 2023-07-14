import { useState } from "react";
import Posts from "./posts/posts";
import Modes from "../shared/mode/modes";
import ContentLayout from "../shared/content-layout/content-layout";
import { PostRouterProcedure } from "~/server/routers/post/post";
import NavButton from "components/root/navbar/nav-button";
import { BiMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { brand } from "data/data";

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
      modes={["All Posts", "Collector's Post"]}
    />
  );
  return (
    <ContentLayout
      page={page}
      headerContent={
        <>
          <div className="flex justify-between">
            <Link
              href="/"
            >
              <Image
                width={300}
                height={300}
                src="/logo.svg"
                alt={brand}
                className="h-7 m-3 -ml-8 sm:hidden"
              />
            </Link>
            <NavButton
              name="Messages"
              icon={<BiMessageSquareDetail />}
              className="block sm:hidden"
            />
          </div>
          {modes}
        </>
      }
      headingClass="hidden sm:block"
    >
      {feedMode === "All Posts" && <Posts posts={posts} />}
    </ContentLayout>
  );
}

export default Feed;
