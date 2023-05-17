'use client';
import { FC } from "react";
import ProfilePicture from "./profile-picture";
import FollowButton from "../buttons/follow-button";
import Link from "next/link";

const ProfileSummary: FC<{
    profile: Profile;
    showFollowingButton: boolean;
}> = ({ profile, showFollowingButton }) => {
    return (
        <Link className="flex items-center justify-start" href={profile.username}>
            <ProfilePicture className="h-16" profilePic={profile.profilePic} />
            <div className="m-2 w-full">
                <h2 className="font-bold text-sm text-white">{profile.name}</h2>
                <div className="flex text-grey">
                    <h2 className="text-sm">@{profile.username}</h2>
                    {!showFollowingButton && profile && (
                        <h2 className="text-sm">
                            <span className="mx-2">·</span>Following
                        </h2>
                    )}
                </div>
                <h3 className="text-xs text-grey capitalize">{profile.userType}</h3>
            </div>
            {showFollowingButton && (
                <FollowButton
                    username={profile.backgroundImage}
                />
            )}
            <div></div>
        </Link>
    );
};

export default ProfileSummary;
