import HiddenMenu from "@/components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "@/components/shared/hidden-menu/hidden-menu-item";
import { FC } from "react";
import profile from "@/modals/profile/profile";
import { blockHandler, muteHandler, reportHandler } from "@/util/profile";
const ProfileHiddenMenu:FC<{profile:profile}>=({profile})=>{
    
    return (
        <HiddenMenu className="right-0 text-sm min-w-max w-48 z-20">
            <HiddenMenuItem title="Block" className="text-red-600" onClickHandler={blockHandler}/>
            <HiddenMenuItem title="Report" className="text-red-600" onClickHandler={reportHandler}/>
            <HiddenMenuItem title="Mute account" onClickHandler={muteHandler}/>
        </HiddenMenu>
    );
  }
  
export default ProfileHiddenMenu;
