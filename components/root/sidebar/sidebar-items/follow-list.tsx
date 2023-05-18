import { FC } from "react";
import ProfileSummary from "components/shared/account/profile-summary";
import Heading from "components/ui/heading";
import { getFollowList } from "src/util/lists";
import Link from "next/link";
const FollowList: FC<{ listType: "collector"|"business" }> = ({ listType }) => {
    const followList = getFollowList(listType, 2);
    return (
        <div className="my-3 rounded-3xl bg-gray z-10 w-full overflow-hidden pt-3">
            <Heading
                text={
                    listType === "business"
                        ? "Trending Businesses"
                        : "Trending Collections"
                }
                className="px-6"
            />
            <ul className=" ">
                {followList.map((profile) => (
                    <li
                        key={profile.username}
                        className=" hover:bg-gray2 p-2.5 px-6"
                    >
                        <ProfileSummary
                            profile={profile}
                            showFollowingButton={true}
                        />
                    </li>
                ))}
            </ul>
            <Link href={`/explore/${listType==="business"?"businesses":"collections"}`} className="text-primary">
                <div className="hover:bg-gray2 p-2.5 px-6">Show More</div>
            </Link>
        </div>
    );
};

export default FollowList;
