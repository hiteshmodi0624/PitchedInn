import BackButton from "@/components/shared/buttons/back-button";
import ProfilePicture from "@/components/shared/profile-picture";
import profile from "@/modals/profile/profile";
import Link from "next/link";

const MessagesHeader = ({profile}:{profile:profile}) => {
    return (
        <div className="border-seperator border-[1px] flex bg-transparent p-2">
            <BackButton />
            <Link
                href={`/${profile.username}`}
                className="flex items-center space-x-2 "
            >
                <ProfilePicture
                    className="h-8 w-8 rounded-full bg-white"
                    profilePic={profile.profilePic}
                />
                <h1>{profile.name}</h1>
            </Link>
        </div>
    );
};

export default MessagesHeader;


