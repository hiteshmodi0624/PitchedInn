import { AiOutlineMore } from "react-icons/ai";
import InteractionIcon from "../../../shared/interaction-icon";
import { FC } from "react";
import PostHiddenMenu from "./post-hidden-menu";
import MenuToggler from "../../../shared/hidden-menu/menu-toggler";
import post from "../../../../modals/post";
import Link from "next/link";
import ProfilePicture from "@/components/shared/profile-picture";

const Profile: FC<{ post: post }> = ({ post }) => {
    const profile = post.profile;
    const date = post.post.date;
    return (
        <div className="flex w-full items-center justify-between pt-2">
            <Link
                href={profile.username}
                className="flex h-full space-x-2 items-center text-grey pb-2"
            >
                <ProfilePicture
                    profilePic={post.profile.profilePic}
                    className="h-12 w-12 sm:w-16 sm:h-16"
                />
                <div className="flex h-max space-x-2 items-start text-sm">
                    <div className="text-white">
                        <h2 className="font-bold">{profile.name}</h2>
                        <h3 className="text-xs">{profile.details.type}</h3>
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
                menu={<PostHiddenMenu post={post} />}
            />
        </div>
    );
};

export default Profile;
