import MessageProfiles from "components/messages/message-profile";
import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";
import { trpc } from '../../utils/trpc';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import BackButton from "components/shared/buttons/back-button";
import Heading from "components/ui/heading";
export default function Messages({}) {
    const { data: session } = useSession();
    const chatListQuery = trpc.user.chat.getUserChats.useQuery();
    const router=useRouter();
    if(!chatListQuery){
        router.back();
        return <></>;
    }
    return (
      <ContentLayout
        className="flex w-full grow overflow-hidden"
        headerContent={
          <div className="flex border-l-0 bg-transparent items-center">
            <BackButton />
            <Heading text={"Messages"} className="first-letter:uppercase" />
          </div>
        }
      >
        <div className="my-6 h-screen w-full grow overflow-auto border-[1px] border-seperator py-2">
          <SearchBar
            className="border-seperator !bg-black"
            placeholder="Search messages"
            divClasses="px-4"
          />
          {chatListQuery.data && (
            <ul className="">
              {chatListQuery.data.map((chat) => (
                <li
                  key={chat.groupName}
                  className=" flex flex-grow flex-col p-2.5 px-6 hover:bg-gray2"
                >
                  <MessageProfiles chat={chat} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </ContentLayout>
    );
  }
