import HiddenMenu from "../../ui/hidden-menu/hidden-menu";
import HiddenMenuItem from "../../ui/hidden-menu/hidden-menu-item";
import { FC } from "react";
import profile from "../../../../modals/profile";
const ProfileHiddenMenu:FC<{profile:profile}>=({profile})=>{
    return (
        <HiddenMenu className="right-0 text-sm min-w-max w-48 z-20">
            <HiddenMenuItem title="Unfollow" className="text-red-600" to={`${profile.username}/unfollow`}/>
            <HiddenMenuItem title="Block" className="text-red-600" to={`${profile.username}/block`}/>
            <HiddenMenuItem title="Report" className="text-red-600" to={`${profile.username}/report`}/>
            <HiddenMenuItem title="Mute account" to={`${profile.username}/mute`}/>
        </HiddenMenu>
    );
  }
  
export default ProfileHiddenMenu;
