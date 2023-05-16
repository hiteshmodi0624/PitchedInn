import ProfileHeader from "./profile-header";
import Profile from "@/modals/profile/profile";
import LargeImage from "@/components/ui/large-image";

const ProfileData = ({profile}:{profile:Profile}) => {
    return (
        <div className="flex flex-col w-full">
            <LargeImage
                src={profile.backgroundImage}
                alt={profile.name}
                className="w-full min-h-max"
            />
            <div className="mx-4">
                <ProfileHeader profile={profile} />
                <div>
                    <h2 className="font-bold text-xl text-white">
                        {profile.name}
                    </h2>
                    <h2 className="text-sm text-grey">@{profile.username}</h2>
                    <div className=" flex space-x-6 my-3">
                        <h2>
                            <span className="text-lg font-bold">
                                {profile.followers.length.toString()}
                            </span>{" "}
                            followers
                        </h2>
                        <h2>
                            <span className="text-lg font-bold">
                                {profile.following.length.toString()}
                            </span>{" "}
                            following
                        </h2>
                    </div>
                    <div className="text-sm mt-4 space-y-1">
                        <p>{profile.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileData;
