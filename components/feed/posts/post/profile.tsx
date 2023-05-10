import { AiOutlineMore } from "react-icons/ai";
import InteractionIcon from "../../../shared/interaction-icon";
import { FC } from "react";
import PostHiddenMenu from "./post-hidden-menu";
import MenuToggler from "../../../shared/hidden-menu/menu-toggler";
import post from "../../../../modals/post";
import Link from "next/link";

const Profile:FC<{post:post}>=({post})=>{
    const profile=post.profile;
    const date=post.post.date;
    return (
        <div className="flex w-full items-center justify-between pt-2">
            <Link
                href={profile.username}
                className="flex h-full space-x-2 items-center p-2"
            >
                <div>
                    <h2 className="font-bold text-sm">{profile.name}</h2>
                    <h3 className="text-xs">{profile.details.type}</h3>
                </div>
                <div className="self-start text-grey">
                    <h2 className="text-sm">@{profile.username}</h2>
                </div>
                <div className="self-start text-grey">
                    <h2 className="text-sm">·</h2>
                </div>
                <div className="self-start text-grey">
                    <h2 className="text-sm">{date}</h2>
                </div>
            </Link>
            <MenuToggler
                button={
                    <InteractionIcon
                        icon1={<AiOutlineMore />}
                        onClick={()=>{}}
                        title="More"
                    />
                }
                menu={<PostHiddenMenu post={post} />}
            />
        </div>
    );
  }
  
export default Profile;
