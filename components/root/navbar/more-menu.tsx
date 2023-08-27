"use client";
import { BiMessageSquareError } from "react-icons/bi";
import HiddenMenu from "components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "components/shared/hidden-menu/hidden-menu-item";
import { AiFillSetting, AiOutlineMore } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { logoutHandler } from "src/util/post";
import NavButton from "./nav-button";
import MenuToggler from "components/shared/hidden-menu/menu-toggler";
function MoreMenu({className}:{className?:string}) {
  return (
    <MenuToggler
      button={
        <NavButton
          name="More"
          icon={<AiOutlineMore />}
          onClickHandler={() => {}}
        />
      }
      menu={
        <HiddenMenu className="w-full min-w-max text-sm">
          <HiddenMenuItem
            title="Settings"
            icon={<AiFillSetting />}
            to="settings"
          />
          <HiddenMenuItem
            title="Saved"
            icon={<BsBookmarkFill />}
            to="profile/saved"
          />
          <HiddenMenuItem
            title="Report A Problem"
            icon={<BiMessageSquareError />}
            to="report"
          />
          <HiddenMenuItem title="Log out" onClickHandler={logoutHandler} />
        </HiddenMenu>
      }
      className={className}
    />
  );
}

export default MoreMenu;
