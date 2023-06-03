import { User } from "@prisma/client";
import ProfileHeader from "./profile-header";
import LargeImage from "components/ui/large-image";
import Link from "next/link";

const ProfileData = ({profile}:{profile:User}) => {
    return (
      <div className="flex w-full flex-col">
        {profile.coverImage && (
          <LargeImage
            src={profile.coverImage}
            alt={profile.id}
            className="min-h-max w-full"
          />
        )}
        <div className="mx-4">
          <ProfileHeader profile={profile} />
          <div>
            <h2 className="text-xl font-bold text-white">{profile.name}</h2>
            <h2 className="text-sm text-grey">@{profile.username}</h2>
            <div className=" my-3 flex space-x-6">
              <Link href={`${profile.username}/followers`}>
                <span className="text-lg font-bold">
                  {profile.followers.length.toString()}
                </span>{" "}
                followers
              </Link>
              <Link href={`${profile.username}/following`}>
                <span className="text-lg font-bold">
                  {profile.following.length.toString()}
                </span>{" "}
                following
              </Link>
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileData;
