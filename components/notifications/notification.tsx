"use client";
import { FC } from "react";
import Link from "next/link";
import ProfilePicture from "components/shared/account/profile-picture";

const Notification: FC<{
  profile: Profile;
}> = ({ profile }) => {
  const notification = "has linked your post.";
  return (
    <Link
      className="relative flex flex-grow items-center justify-start"
      href={`${profile.username}`}
    >
      <ProfilePicture className="h-12" profilePic={profile.profilePic} />
      <div className="m-2 w-full ">
        <div className="flex items-center space-x-2 text-grey">
          <h2 className="text-base font-bold text-white">
            {profile.name}{" "}
            <span className="font-extralight">{notification}</span>
            <span className="ml-2 text-xs font-extralight text-grey">2w</span>
          </h2>
        </div>
      </div>
      <ProfilePicture
        className="!m-0 h-12 !rounded-none !p-0"
        profilePic={profile.backgroundImage}
      />
    </Link>
  );
};

export default Notification;
