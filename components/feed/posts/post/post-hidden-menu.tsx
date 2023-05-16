import HiddenMenu from "../../../shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "../../../shared/hidden-menu/hidden-menu-item";
import { FC } from "react";
const PostHiddenMenu:FC<{userId:string}>=({userId})=>{
    return (
        <HiddenMenu className="right-0 text-sm min-w-max w-48 z-20">
            <HiddenMenuItem title="Unfollow" className="text-red-600" to={`${userId}/unfollow`}/>
            <HiddenMenuItem title="Block" className="text-red-600" to={`${userId}/block`}/>
            <HiddenMenuItem title="Report" className="text-red-600" to={`${userId}/report`}/>
            <HiddenMenuItem title="Mute account" to={`${userId}/mute`}/>
            <HiddenMenuItem title="Copy link"/>
        </HiddenMenu>
    );
  }
  
export default PostHiddenMenu;
