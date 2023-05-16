import ContentLayout from "@/components/shared/content-layout/content-layout";
import ProfileSummary from "@/components/shared/profile-summary";
import { getFollowList } from "@/util/lists";

export default function Business() {
    const followList = getFollowList("business");
    return (
        <ContentLayout page="Suggested Business to Follow">
            <div className="border-seperator border-[1px] w-full p-4 grow my-6 overflow-scroll h-full">
                <ul className="">
                    {followList.map((profile) => (
                        <li
                            key={profile.username}
                            className=" hover:bg-gray2 p-2.5 px-6 w-full"
                        >
                            <ProfileSummary
                                profile={profile}
                                showFollowingButton={true}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </ContentLayout>
    );
  }
