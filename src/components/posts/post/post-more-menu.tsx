import HiddenMenu from "../../ui/hidden-menu/hidden-menu";
import HiddenMenuItem from "../../ui/hidden-menu/hidden-menu-item";
import { FC } from "react";
import post from "../../../../modals/post";
const PostHiddenMenu:FC<{post:post}>=({post})=>{
    return (
        <HiddenMenu className="right-0 text-sm min-w-max w-48 z-20">
            <HiddenMenuItem title="Unfollow" className="text-red-600" to={`${post.profile.username}/unfollow`}/>
            <HiddenMenuItem title="Block" className="text-red-600" to={`${post.profile.username}/block`}/>
            <HiddenMenuItem title="Report" className="text-red-600" to={`${post.post.id}/report`}/>
            <HiddenMenuItem title="Mute account" to={`${post.profile.username}/mute`}/>
            <HiddenMenuItem title="Share to" to={`${post.post.id}/share`}/>
            <HiddenMenuItem title="Copy link" to={`${post.post.id}/share`}/>
        </HiddenMenu>
    );
  }
  
export default PostHiddenMenu;
