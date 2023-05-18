import { FC } from "react";
import Link from "next/link";
import ProfilePicture from "./profile-picture";
import FollowButton from "../buttons/follow-button";

const DetailedProfileSummary: FC<{
    profile: Profile;
}> = ({ profile }) => {
    return (
        <Link href={profile.username}>
            <div className="flex items-top justify-start">
                <ProfilePicture
                    className="h-16"
                    profilePic={profile.profilePic}
                />
                <div className="grow m-2 space-y-1">
                    <div className="flex items-center justify-start grow">
                        <div className="w-full">
                            <h2 className="font-bold text-sm text-white">
                                {profile.name}{" "}
                                <span className="text-grey capitalize">{` · ${profile.userType}`}</span>
                            </h2>
                            <div className="flex text-grey">
                                <h2 className="text-sm">@{profile.username}</h2>
                            </div>
                            <h3 className=""></h3>
                        </div>
                        <FollowButton username={profile.backgroundImage} />
                    </div>
                    {profile.bio && (
                        <div>
                            <p className="text-sm">{profile.bio}</p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default DetailedProfileSummary;
