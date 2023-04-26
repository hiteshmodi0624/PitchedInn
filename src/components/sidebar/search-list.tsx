import { FC } from "react";
import { dummyPosts } from "../../data/dummy-post";
import HiddenMenu from "../ui/hidden-menu/hidden-menu";
import HiddenMenuItem from "../ui/hidden-menu/hidden-menu-item";
import ProfileSummary from "../profile/profile-summary";

const SearchList: FC<{ search: string }> = ({ search }) => {
    return (
        <HiddenMenu className="hidden group-focus-within:block -mt-4 w-full max-h-80 overflow-scroll">
            {dummyPosts.map((post) => (
                <HiddenMenuItem
                    key={post.profile.username}
                    to={post.profile.username}
                >
                    <ProfileSummary
                        profile={post.profile}
                        showFollowingButton={false}
                    />
                </HiddenMenuItem>
            ))}
        </HiddenMenu>
    );
};

export default SearchList;
