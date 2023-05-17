'use client';
import { FC } from "react";
import Link from "next/link";
import ProfilePicture from "@/components/shared/account/profile-picture";

const MessageProfiles: FC<{
    profile: Profile;
}> = ({ profile }) => {
    const message="Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn";
    return (
        <Link
            className="flex items-center justify-center"
            href={`messages/${profile.username}`}
        >
            <ProfilePicture className="h-12" profilePic={profile.profilePic} />
            <div className="m-2 w-full flex flex-col overflow-hidden">
                <div className="flex text-grey h-5 overflow-hidden">
                    <h2 className="font-bold text-sm text-white truncate">
                        {profile.name}
                    </h2>
                    <h2 className="text-sm truncate">
                        <span className="mx-2">·</span>@{profile.username}
                    </h2>
                    <h2 className="text-sm truncate">
                        <span className="mx-2">·</span>15 May,2023
                    </h2>
                </div>
                <p className="text-xs text-grey truncate">
                    {message}
                </p>
            </div>
        </Link>
    );
};

export default MessageProfiles;
