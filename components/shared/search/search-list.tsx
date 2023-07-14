import { FC } from "react";
import HiddenMenu from "components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "components/shared/hidden-menu/hidden-menu-item";
import ProfileSummary from "components/shared/account/profile-summary";
import { User } from "@prisma/client";
import { trpc } from "~/utils/trpc";

const SearchList: FC<{ search: string }> = ({ search }) => {
  const userListQuery=trpc.user.getAllUsers.useQuery();
  if(!userListQuery.data){
    return <div></div>
  }
  return (
    <HiddenMenu className="-mt-4 pt-6 hidden max-h-80 w-full overflow-scroll group-focus-within:block">
      {userListQuery.data.map((profile) => (
        <HiddenMenuItem key={profile.username} to={profile.username!}>
          <ProfileSummary profile={profile} showFollowingButton={false} />
        </HiddenMenuItem>
      ))}
    </HiddenMenu>
  );
};

export default SearchList;
