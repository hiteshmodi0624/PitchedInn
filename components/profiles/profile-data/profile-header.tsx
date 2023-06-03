import { FC } from "react";
import ProfilePicture from "components/shared/account/profile-picture";
import FollowButton from "components/shared/buttons/follow-button";
import Button from "components/ui/button";
import { AiOutlineMore } from "react-icons/ai";
import MenuToggler from "components/shared/hidden-menu/menu-toggler";
import ProfileHiddenMenu from "./profile-hidden-menu";
import { useRouter } from "next/router";
import { User } from "@prisma/client";

const ProfileHeader: FC<{
    profile: User;
}> = ({ profile }) => {
    const username= useRouter().query.username!
    return (
        <div className="flex justify-between">
            <ProfilePicture
                className="h-32 w-32 flex justify-center rounded-full bg-white -translate-y-1/3"
                profilePic={profile.image??""}
            />
            <div className="flex space-x-2 items-center mt-4">
                {username === "profile" ? (
                    <Button
                        name="Edit Profile"
                        className="mr-0"
                        buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
                        link="/account/edit"
                    />
                ) : (
                    <>
                        <Button
                            name="Message"
                            className="mr-0"
                            buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
                        />
                        {profile.username&&<FollowButton
                            className="mr-0"
                            username={profile.username}
                        />}
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
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileHeader;
