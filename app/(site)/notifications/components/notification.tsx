'use client';
import { FC } from "react";
import Link from "next/link";
import profile from "@/modals/profile/profile";
import ProfilePicture from "@/components/shared/profile-picture";

const Notification: FC<{
    profile: profile;
}> = ({ profile }) => {
    const notification="has linked your post.";
    return (
        <Link
            className="flex items-center justify-start flex-grow relative"
            href={`${profile.username}`}
        >
            <ProfilePicture className="h-12" profilePic={profile.profilePic} />
            <div className="m-2 w-full ">
                <div className="flex text-grey items-center space-x-2">
                    <h2 className="font-bold text-base text-white">
                        {profile.name}{" "}
                        <span className="font-extralight">{notification}</span>
                        <span className="text-grey text-xs ml-2 font-extralight">2w</span>
                    </h2>
                </div>
            </div>
            <ProfilePicture
                className="h-12 !rounded-none !p-0 !m-0"
                profilePic={profile.backgroundImage}
            />
        </Link>
    );
};

export default Notification;
