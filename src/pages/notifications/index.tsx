import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";
import { getFollowList } from "src/util/lists";
import Notification from "components/notifications/notification";

export default function Notifications() {
  const followList = getFollowList("business");
  return (
    <ContentLayout page="Notifications" className="overflow-x-hidden">
      <div className="my-6 h-full w-full grow overflow-scroll border-[1px] border-seperator py-2">
        <SearchBar
          className="border-seperator !bg-black"
          placeholder="Search notifications"
          divClasses="px-4"
        />
        <ul className="">
          {followList.map((profile) => (
            <li
              key={profile.username}
              className=" flex flex-grow flex-col p-2.5 px-6 hover:bg-gray2"
            >
              <Notification profile={profile} />
            </li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}
