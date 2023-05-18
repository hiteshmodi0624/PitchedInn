import { AiOutlineMore } from "react-icons/ai";
import InteractionIcon from "../../../shared/interaction-icon";
import { FC } from "react";
import PostHiddenMenu from "./post-hidden-menu";
import MenuToggler from "../../../shared/hidden-menu/menu-toggler";
import Link from "next/link";
import ProfilePicture from "components/shared/account/profile-picture";
import { getProfileData } from "src/util/profile";

const Profile: FC<{ userId: string, date:string }> = ({ userId,date }) => {
    const profile:Profile=getProfileData(userId)!;
    return (
        <div className="flex w-full items-center justify-between pt-2">
            <Link
                href={profile.username}
                className="flex h-full space-x-2 items-center text-grey pb-2"
            >
                <ProfilePicture
                    profilePic={profile.profilePic}
                    className="h-12 w-12 sm:w-16 sm:h-16"
                />
                <div className="flex h-max space-x-2 items-start text-sm">
                    <div className="text-white">
                        <h2 className="font-bold">{profile.name}</h2>
                        <h3 className="text-xs">{profile.userType.toUpperCase()}</h3>
                    </div>
                    <h2>@{profile.username}</h2>
                    <h2>·</h2>
                    <h2>{date}</h2>
                </div>
            </Link>
            <MenuToggler
                button={
                    <InteractionIcon
                        icon1={<AiOutlineMore />}
                        onClick={() => {}}
                        title="More"
                    />
                }
                menu={<PostHiddenMenu userId={userId} />}
            />
        </div>
    );
};

export default Profile;
