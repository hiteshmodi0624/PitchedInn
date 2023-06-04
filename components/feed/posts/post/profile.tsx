import { AiOutlineMore } from "react-icons/ai";
import InteractionIcon from "../../../shared/interaction-icon";
import { FC } from "react";
import PostHiddenMenu from "./post-hidden-menu";
import MenuToggler from "../../../shared/hidden-menu/menu-toggler";
import Link from "next/link";
import Image from "next/image";
import { trpc } from "~/utils/trpc";

const Profile: FC<{ userId: string; date: string }> = ({ userId, date }) => {
  const db=trpc.user.getUserInfo.useQuery({id:userId})
  const profile=db.data;
  if(!profile){
    return <></>
  }
  return (
    <div className="flex w-full items-center justify-between pt-2">
      <Link
        href={profile.username ?? profile.id}
        className="flex h-full items-center space-x-2 pb-2 text-grey"
      >
          <Image
            className="flex h-12 w-12 bg-white rounded-full"
            width={1000}
            height={1000}
            src={profile.image ?? "/profile-picture.svg"}
            alt={profile.username ?? "Profile Picture"}
          />
        <div className="flex h-max items-start space-x-2 text-sm">
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
