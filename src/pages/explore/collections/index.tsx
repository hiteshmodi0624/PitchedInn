import ContentLayout from "components/shared/content-layout/content-layout";
import { getFollowList } from "src/util/lists";
import DetailedProfilesList from "components/ui/list/list";

export default function Collections() {
  const followList = getFollowList("collector");
  return (
    <ContentLayout page="Suggested Collections to Follow">
      <div className="my-6 h-full w-full grow overflow-scroll border-[1px] border-seperator">
        <DetailedProfilesList list={followList} />
      </div>
    </ContentLayout>
  );
}
