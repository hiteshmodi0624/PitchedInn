"use client"
import { BiMessageSquareError } from "react-icons/bi";
import HiddenMenu from "components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "components/shared/hidden-menu/hidden-menu-item";
import { AiFillSetting } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs";
import { logoutHandler } from "src/util/post";
function MoreMenu() {
    return (
        <HiddenMenu className="text-sm min-w-max w-full">
            <HiddenMenuItem title="Settings" icon={<AiFillSetting />} to="settings"/>
            <HiddenMenuItem title="Saved" icon={<BsBookmarkFill />} to="profile/saved"/>
            <HiddenMenuItem title="Report A Problem" icon={<BiMessageSquareError />} to="report"/>
            <HiddenMenuItem title="Log out" onClickHandler={logoutHandler}/>
        </HiddenMenu>
    );
  }
  
export default MoreMenu;
