import { FC, useState } from "react";
import FollowButton from "components/shared/buttons/follow-button";
import Button from "components/ui/button";
import { AiOutlineMore } from "react-icons/ai";
import MenuToggler from "components/shared/hidden-menu/menu-toggler";
import ProfileHiddenMenu from "./profile-hidden-menu";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import ProfileImage from './profile-image';
import MoreMenu from "components/root/navbar/more-menu";
const ProfileHeader: FC<{
  profile: User;
  setFollowValue: (value: boolean) => void;
}> = ({ profile, setFollowValue }) => {
  const { data: session, status } = useSession();
  
  return (
    <div className="flex justify-between">
      <ProfileImage
        profileImage={profile.image}
        id={profile.username ?? profile.id}
        className="-translate-y-1/3"
      />
      <div className="mt-4 flex items-center space-x-2">
        {profile.id === session?.user.id ? (
          <>
            <MoreMenu className="w-min sm:hidden" />
            <Button
              name="Edit Profile"
              className="mr-0"
              buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
              link="settings/profile"
              labelClasses="hidden"
            />
          </>
        ) : (
          <>
            {status === "authenticated" && (
              <Button
                name="Message"
                className="mr-0"
                buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
                labelClasses="hidden"
                link={`/messages/${profile.id}`}
              />
            )}
            {profile.username && (
              <FollowButton
                className="mr-0"
                username={profile.username}
                setFollowValue={setFollowValue}
              />
            )}
            {status === "authenticated" ?? (
              <MenuToggler
                button={
                  <Button
                    name="More"
                    className="mr-0"
                    icon={<AiOutlineMore />}
                    nameClasses="hidden"
                    buttonClasses="border-grey border-[1px] aspect-square w-3 justify-center"
                    onClickHandler={() => {}}
                    labelClasses="hidden"
                  />
                }
                menu={<ProfileHiddenMenu profile={profile} />}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
