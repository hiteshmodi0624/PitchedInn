import { FC } from "react";
import ProfilePicture from "../../ui/profile-picture";
import FollowButton from "../../ui/buttons/follow-button";
import Button from "../../ui/buttons/button";
import { AiOutlineMore } from "react-icons/ai";
import MenuToggler from "../../ui/hidden-menu/menu-toggler";
import profile from "../../../../modals/profile";
import ProfileHiddenMenu from "./profile-hidden-menu";

const ProfileHeader: FC<{
    profile: profile;
}> = ({ profile }) => {
    return (
        <div className="flex justify-between">
            <ProfilePicture
                className="h-32 w-32 flex justify-center rounded-full bg-white -translate-y-1/3"
                profilePic={profile.profilePic}
            />
            <div className="flex space-x-2 items-center mt-4">
                <Button
                    name="Message"
                    light={true}
                    className="mr-0"
                    buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
                />
                <FollowButton following={profile.following} className="mr-0" />

                <MenuToggler
                    button={
                        <Button
                            name="More"
                            light={true}
                            className="mr-0"
                            icon={<AiOutlineMore />}
                            nameClasses="hidden"
                            buttonClasses="border-grey border-[1px] aspect-square w-3 justify-center"
                            onClickHandler={()=>{}}
                        />
                    }
                    menu={<ProfileHiddenMenu profile={profile} />}
                />
            </div>
        </div>
    );
};

export default ProfileHeader;
