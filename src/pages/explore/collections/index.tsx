import ContentLayout from "components/shared/content-layout/content-layout";
import { getFollowList } from "src/util/lists";
import DetailedProfilesList from "components/ui/list/list";

export default function Collections() {
    const followList = getFollowList("collector");
    return (
        <ContentLayout page="Suggested Collections to Follow">
            <div className="border-seperator border-[1px] w-full grow my-6 overflow-scroll h-full">
                <DetailedProfilesList list={followList} />
            </div>
        </ContentLayout>
    );
  }
