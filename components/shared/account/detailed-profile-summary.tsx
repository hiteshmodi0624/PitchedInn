import { FC } from "react";
import Link from "next/link";
import ProfilePicture from "./profile-picture";
import FollowButton from "../buttons/follow-button";
import { User } from "@prisma/client";

const DetailedProfileSummary: FC<{
    profile: User;
}> = ({ profile }) => {
    return (
      <Link href={`/${profile.username!}`}>
        <div className="items-top flex justify-start">
          <ProfilePicture
            className="flex h-16 w-16 bg-white "
            profilePic={profile.image}
          />
          <div className="m-2 grow space-y-1">
            <div className="flex grow items-center justify-start">
              <div className="w-full">
                <h2 className="text-sm font-bold text-white">
                  {profile.name}{" "}
                  <span className="capitalize text-grey">{` · ${profile.userType}`}</span>
                </h2>
                <div className="flex text-grey">
                  <h2 className="text-sm">@{profile.username}</h2>
                </div>
                <h3 className=""></h3>
              </div>
              <FollowButton username={profile.username!} />
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
