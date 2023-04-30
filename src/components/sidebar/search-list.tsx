import { FC } from "react";
import HiddenMenu from "../ui/hidden-menu/hidden-menu";
import HiddenMenuItem from "../ui/hidden-menu/hidden-menu-item";
import ProfileSummary from "../profile/profile-summary";
import { getSearchList } from "../../services/lists";

const SearchList: FC<{ search: string }> = ({ search }) => {
    const searchList = getSearchList(search);
    return (
        <HiddenMenu className="hidden group-focus-within:block -mt-4 w-full max-h-80 overflow-scroll">
            {searchList.map((profile) => (
                <HiddenMenuItem key={profile.username} to={profile.username}>
                    <ProfileSummary
                        profile={profile}
                        showFollowingButton={false}
                    />
                </HiddenMenuItem>
            ))}
        </HiddenMenu>
    );
};

export default SearchList;
