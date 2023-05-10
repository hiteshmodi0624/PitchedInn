import ProfileCover from "./profile-cover";
import ProfileHeader from "./profile-header";
import ProfileDetails from "./profile-details";
import { getProfileData } from "@/services/profile";
import { useParams } from "next/navigation";

const ProfileData = () => {
    const params=useParams();
    const profile=getProfileData(params!.username as string);
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
