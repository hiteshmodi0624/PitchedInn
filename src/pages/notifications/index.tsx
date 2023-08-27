import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";
import Notification from "components/notifications/notification";
import { trpc } from "~/utils/trpc";
export default function Notifications() {
  const notifications = trpc.user.notification.getUserNotifications.useQuery();
  if(!notifications.data){
    return <div></div>;
  }
  return (
    <ContentLayout page="Notifications" className="overflow-x-hidden">
      <div className="my-6 h-full w-full grow overflow-auto border-[1px] border-seperator py-2">
        <SearchBar
          className="border-seperator !bg-black"
          placeholder="Search notifications"
          divClasses="px-4"
        />
        <ul className="">
          {notifications.data.map((item) => (
            <li
              key={item.id}
              className=" flex flex-grow flex-col p-2.5 px-6 hover:bg-gray2"
            >
              <Notification notification={item} />
            </li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}
