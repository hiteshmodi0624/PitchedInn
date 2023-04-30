import { FC } from "react";
import profile from "../../../modals/profile";
import ProfilePicture from "../ui/profile-picture";
import { Link } from "react-router-dom";
import FollowButton from "../ui/buttons/follow-button";

const ProfileSummary: FC<{
    profile: profile;
    showFollowingButton: boolean;
}> = ({ profile, showFollowingButton }) => {
    return (
        <Link className="flex items-center justify-start" to={profile.username}>
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
                <h3 className="text-xs text-grey">{profile.details.type}</h3>
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
