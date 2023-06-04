import { User } from "@prisma/client";
import MessageProfiles from "components/messages/message-profile";
import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";

export default function Messages({}) {
    const followList:User[] = [];
    return (
        <ContentLayout page="Messages" className="flex grow overflow-hidden w-full">
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
                            <MessageProfiles profile={profile} />
                        </li>
                    ))}
                </ul>
            </div>
        </ContentLayout>
    );
  }
