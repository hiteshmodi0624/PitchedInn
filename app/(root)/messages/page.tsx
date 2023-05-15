import ContentLayout from "@/components/shared/content-layout/content-layout";
import SearchBar from "@/components/shared/search/search-bar";
import { getFollowList } from "@/services/lists";
import MessageProfiles from "./[username]/components/message-profile";

export default function Messages() {
    const followList = getFollowList("startups");
    return (
        <ContentLayout page="Messages" className="overflow-x-hidden">
            <div className="border-seperator border-[1px] w-full py-2 grow my-6 overflow-scroll h-full">
                <SearchBar
                    className="!bg-black border-seperator"
                    placeholder="Search messages"
                    divClasses="px-4"
                />
                <ul className="">
                {followList.map((profile) => (
                    <li
                        key={profile.username}
                        className=" hover:bg-gray2 p-2.5 px-6 flex-grow flex flex-col"
                    >
                        <MessageProfiles
                            profile={profile}
                        />
                    </li>
                ))}
            </ul>
            </div>
        </ContentLayout>
    );
  }
