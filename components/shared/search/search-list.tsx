"use client";
import { FC } from "react";
import HiddenMenu from "components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "components/shared/hidden-menu/hidden-menu-item";
import ProfileSummary from "components/shared/account/profile-summary";
import { getSearchList } from "src/util/lists";
import { User } from "@prisma/client";

const SearchList: FC<{ search: string }> = ({ search }) => {
  const searchList:User[] = [];
  return (
    <HiddenMenu className="-mt-4 hidden max-h-80 w-full overflow-scroll group-focus-within:block">
      {searchList.map((profile) => (
        <HiddenMenuItem key={profile.username} to={profile.username!}>
          <ProfileSummary profile={profile} showFollowingButton={false} />
        </HiddenMenuItem>
      ))}
    </HiddenMenu>
  );
};

export default SearchList;
