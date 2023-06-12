import { User } from "@prisma/client";
import ProfileHeader from "./profile-header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import CoverImage from "./cover-image";

const ProfileData = ({ profile }: { profile: User }) => {
  const [isFollowing, setIsFollowing] = useState(0);
  const { data: session } = useSession();
  const setFollowValue = (value: boolean) => {
    if (!session) {
      setIsFollowing(0);
      return;
    }
    if (profile.followers.includes(session.user.id!)) {
      setIsFollowing(value ? 0 : -1);
    } else {
      setIsFollowing(value ? 1 : 0);
    }
  };
  return (
    <div className="flex w-full flex-col">
      <CoverImage coverImage={profile.coverImage} id={profile.username??profile.id} />
      <div className="mx-4">
        <ProfileHeader profile={profile} setFollowValue={setFollowValue} />
        <div>
          <h2 className="text-xl font-bold text-white">{profile.name}</h2>
          <h2 className="text-sm text-grey">@{profile.username}</h2>
          <div className=" my-3 flex space-x-6">
            <Link href={`${profile.username}/followers`}>
              <span className="text-lg font-bold">
                {profile.followers.length + isFollowing}
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
