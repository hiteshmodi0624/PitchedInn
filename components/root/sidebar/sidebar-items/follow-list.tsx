import { FC } from "react";
import ProfileSummary from "components/shared/account/profile-summary";
import Heading from "components/ui/heading";
import { getFollowList } from "src/util/lists";
import Link from "next/link";
const FollowList: FC<{ listType: "collector" | "business" }> = ({
  listType,
}) => {
  const followList = getFollowList(listType, 2);
  return (
    <div className="z-10 my-3 w-full overflow-hidden rounded-3xl bg-gray pt-3">
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
          <li key={profile.username} className=" p-2.5 px-6 hover:bg-gray2">
            <ProfileSummary profile={profile} showFollowingButton={true} />
          </li>
        ))}
      </ul>
      <Link
        href={`/explore/${
          listType === "business" ? "businesses" : "collections"
        }`}
        className="text-primary"
      >
        <div className="p-2.5 px-6 hover:bg-gray2">Show More</div>
      </Link>
    </div>
  );
};

export default FollowList;
