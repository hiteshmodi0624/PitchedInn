import { User } from "@prisma/client";
import HiddenMenu from "components/shared/hidden-menu/hidden-menu";
import HiddenMenuItem from "components/shared/hidden-menu/hidden-menu-item";
import { FC } from "react";
import { blockHandler, muteHandler, reportHandler } from "~/util/profile";
const ProfileHiddenMenu: FC<{ profile: User }> = ({ profile }) => {
  return (
    <HiddenMenu className="right-0 z-20 w-48 min-w-max text-sm">
      <HiddenMenuItem
        title="Block"
        className="text-red-600"
        onClickHandler={blockHandler}
      />
      <HiddenMenuItem
        title="Report"
        className="text-red-600"
        onClickHandler={reportHandler}
      />
      <HiddenMenuItem title="Mute account" onClickHandler={muteHandler} />
    </HiddenMenu>
  );
};

export default ProfileHiddenMenu;
