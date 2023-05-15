'use client';
import { FC } from "react";
import Link from "next/link";
import profile from "@/modals/profile";
import ProfilePicture from "@/components/shared/profile-picture";

const MessageProfiles: FC<{
    profile: profile;
}> = ({ profile }) => {
    const message="Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn";
    return (
        <Link
            className="flex items-center justify-start flex-grow relative"
            href={`messages/${profile.username}`}
        >
            <ProfilePicture className="h-12" profilePic={profile.profilePic} />
            <div className="m-2 w-full overflow-hidden">
                <div className="flex text-grey h-5 overflow-hidden">
                    <h2 className="font-bold text-sm text-white text-ellipsis whitespace-nowrap w-16">
                        {profile.name}
                    </h2>
                    <h2 className="text-sm text-ellipsis whitespace-nowrap">
                        <span className="mx-2">·</span>@{profile.username}
                    </h2>
                    <h2 className="text-sm text-ellipsis whitespace-nowrap">
                        <span className="mx-2">·</span>15 May,2023
                    </h2>
                </div>
                <p className="text-xs text-grey text-ellipsis whitespace-nowrap flex-grow flex flex-col">
                    {message}
                </p>
            </div>
        </Link>
    );
};

export default MessageProfiles;
