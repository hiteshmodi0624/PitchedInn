import { FC } from "react";
import profile from "../../../../modals/profile";
import ProfileCover from "./profile-cover";
import ProfileHeader from "./profile-header";
import ProfileDetails from "./profile-details";

const ProfileData: FC<{
    profile: profile;
}> = ({ profile }) => {
    return (
        <div className="flex flex-col w-full">
            <ProfileCover image={profile.backgroundImage} name={profile.name} />
            <div className="mx-4">
                <ProfileHeader profile={profile}/>
                <ProfileDetails profile={profile}/>
            </div>
        </div>
    );
};

export default ProfileData;
