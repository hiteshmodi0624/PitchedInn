'use client';
import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProfilePicture from "@/components/shared/account/profile-picture";

const MessageProfiles: FC<{
    profile: Profile;
}> = ({ profile }) => {

    useEffect(() => {
        const main = document.getElementById("feed");
        const messages = document.getElementById("messages")!;
        if (main) {
            const width = main.getBoundingClientRect().width;
            messages.style.width = `${width}px`;
        }
    }, []);
    const message="Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn";
    return (
        <Link
            className="flex items-center justify-center"
            href={`messages/${profile.username}`}
        >
            <ProfilePicture className="h-12" profilePic={profile.profilePic} />
            <div
                className="m-2 flex w-full flex-col overflow-hidden overflow-ellipsis truncate" id="messages"
            >
                <div className="flex h-5 overflow-hidden text-grey">
                    <h2 className="text-sm font-bold text-white">
                        {profile.name}
                    </h2>
                    <h2 className="text-sm">
                        <span className="mx-2">·</span>@{profile.username}
                    </h2>
                    <h2 className="text-sm">
                        <span className="mx-2">·</span>15 May,2023
                    </h2>
                </div>
                <p className="text-xs text-grey overflow-ellipsis truncate">{message}</p>
            </div>
        </Link>
    );
};

export default MessageProfiles;
