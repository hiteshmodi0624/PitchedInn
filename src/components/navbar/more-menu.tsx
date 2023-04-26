import { BiMessageSquareError } from "react-icons/bi";
import HiddenMenu from "../ui/hidden-menu/hidden-menu";
import HiddenMenuItem from "../ui/hidden-menu/hidden-menu-item";
import { AiFillSetting } from "react-icons/ai"
import { BsBookmarkFill } from "react-icons/bs";
function MoreMenu() {
    return (
        <HiddenMenu className="text-sm min-w-max w-full">
            <HiddenMenuItem title="Settings" icon={<AiFillSetting />} to="settings"/>
            <HiddenMenuItem title="Saved" icon={<BsBookmarkFill />} to="saved"/>
            <HiddenMenuItem title="Report A Problem" icon={<BiMessageSquareError />} to="report"/>
            <HiddenMenuItem title="Switch accounts" to="switch"/>
            <HiddenMenuItem title="Log out" to="logout"/>
        </HiddenMenu>
    );
  }
  
export default MoreMenu;
