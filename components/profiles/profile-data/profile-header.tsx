import { FC } from "react";
import ProfilePicture from "components/shared/account/profile-picture";
import FollowButton from "components/shared/buttons/follow-button";
import Button from "components/ui/button";
import { AiOutlineMore } from "react-icons/ai";
import MenuToggler from "components/shared/hidden-menu/menu-toggler";
import ProfileHiddenMenu from "./profile-hidden-menu";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import Image from "next/image";
import { useSession } from "next-auth/react";
const ProfileHeader: FC<{
  profile: User;
  setFollowValue: (value: boolean) => void;
}> = ({ profile, setFollowValue }) => {
  const username = useRouter().query.username!;
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between">
      <div>
        <Image
          className="flex h-32 w-32 -translate-y-1/3 justify-center overflow-hidden rounded-full bg-white"
          width={1000}
          height={1000}
          src={profile.image ?? "/profile-picture.svg"}
          alt={profile.username ?? "Profile Picture"}
        />
      </div>
      <div className="mt-4 flex items-center space-x-2">
        {username === session?.user.username ? (
          <Button
            name="Edit Profile"
            className="mr-0"
            buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
            link="/account/edit"
          />
        ) : (
          <>
            {status === "authenticated" && (
              <Button
                name="Message"
                className="mr-0"
                buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
              />
            )}
            {profile.username && (
              <FollowButton
                className="mr-0"
                username={profile.username}
                setFollowValue={setFollowValue}
              />
            )}
            {status === "authenticated" && (
              <MenuToggler
                button={
                  <Button
                    name="More"
                    className="mr-0"
                    icon={<AiOutlineMore />}
                    nameClasses="hidden"
                    buttonClasses="border-grey border-[1px] aspect-square w-3 justify-center"
                    onClickHandler={() => {}}
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
