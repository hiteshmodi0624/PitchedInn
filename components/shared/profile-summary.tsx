import { FC } from "react";
import Image from "next/image";
import FollowButton from "./buttons/follow-button";
import Link from "next/link";
import { User } from "@prisma/client";

const ProfileSummary: FC<{
    profile: User;
    showFollowingButton: boolean;
}> = ({ profile, showFollowingButton }) => {
    return (
      <Link
        className="flex items-center justify-start"
        href={`/${profile.username}`}
      >
        <Image
          className="flex h-16 w-16"
          width={1000}
          height={1000}
          src={profile.image ?? "/profile-picture.svg"}
          alt={profile.username ?? "Profile Picture"}
        />
        <div className="m-2 w-full">
          <h2 className="text-sm font-bold text-white">{profile.name}</h2>
          <div className="flex text-grey">
            <h2 className="text-sm">@{profile.username}</h2>
            {!showFollowingButton && profile && (
              <h2 className="text-sm">
                <span className="mx-2">·</span>Following
              </h2>
            )}
          </div>
          <h3 className="text-xs text-grey">{profile.userType}</h3>
        </div>
        {showFollowingButton && <FollowButton username={profile.username!} />}
        <div></div>
      </Link>
    );
};

export default ProfileSummary;
