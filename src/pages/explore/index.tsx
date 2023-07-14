import Feed from "components/feed/feed";
import Posts from "components/feed/posts/posts";
import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";
import Heading from "components/ui/heading";
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
    <ContentLayout
      page="Explore"
      headingClass="hidden sm:block"
      headerContent={
        <div className="mx-4 sm:hidden flex items-center relative">
          <Heading text="Explore"/>
          <SearchBar
            placeholder="Search Startups And Collections"
            className="border-0 truncate"
            divClasses="w-56 focus-within:w-full !absolute right-1 transition-all bg-transparent h-10"
            borderClass="border-none focus-within:border-solid -my-0.5"
          />
        </div>
      }
    >
      <Posts posts={posts} />
    </ContentLayout>
  );
}
