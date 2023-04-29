import { FC } from "react";
import profile from "../../../../modals/profile";
import HorizontalListItem from "../../ui/horizontal-list/horizontal-list-item";

const ProfileDetails: FC<{
    profile: profile;
}> = ({ profile }) => {
    return (
        <>
            <h2 className="font-bold text-xl text-white">{profile.name}</h2>
            <h2 className="text-sm text-grey">@{profile.username}</h2>
            <div className="text-sm mt-4 space-y-1">
                {profile.details.type && (
                    <h2 className="text-base text-white">
                        {profile.details.type}
                    </h2>
                )}
                <p>{profile.bio}</p>
            </div>
            <div className="text-sm text-grey flex flex-wrap font-extralight p-3">
                {profile.details.birthDate && (
                    <HorizontalListItem title={profile.details.birthDate} />
                )}
                {profile.details.location && (
                    <HorizontalListItem title={profile.details.location} />
                )}

                {profile.details.website && (
                    <HorizontalListItem
                        title={profile.details.website}
                        link={profile.details.website}
                    />
                )}
            </div>
        </>
    );
};

export default ProfileDetails;
