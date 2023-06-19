import { User } from "@prisma/client";
import MessageProfiles from "components/messages/message-profile";
import ContentLayout from "components/shared/content-layout/content-layout";
import SearchBar from "components/shared/search/search-bar";
import { trpc } from '~/utils/trpc';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";

export default function Messages({}) {
    const { data: session } = useSession();
    const followListQuery = trpc.user.follow.getUserFollowing.useQuery({id:session?.user.id});
    const router=useRouter();
    if(!followListQuery){
        router.back();
        return <></>;
    }
    return (
      <ContentLayout
        page="Messages"
        className="flex w-full grow overflow-hidden"
      >
        <div className="my-6 h-full w-full grow overflow-scroll border-[1px] border-seperator py-2">
          <SearchBar
            className="border-seperator !bg-black"
            placeholder="Search messages"
            divClasses="px-4"
          />
          {followListQuery.data && (
            <ul className="">
              {followListQuery.data.map((profile) => (
                <li
                  key={profile.username}
                  className=" flex flex-grow flex-col p-2.5 px-6 hover:bg-gray2"
                >
                  <MessageProfiles profile={profile} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </ContentLayout>
    );
  }
