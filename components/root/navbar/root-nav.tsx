"use client";
import { FC, useState } from "react";
import NavButton from "./nav-button";
import {
  AiFillHome,
  AiOutlineNotification,
  AiOutlinePlusSquare,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import MoreMenu from "./more-menu";
import MenuToggler from "components/shared/hidden-menu/menu-toggler";
import Create from "components/create/create";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { BiMessageSquareDetail } from "react-icons/bi";
const RootNav = () => {
  const [createState, changeState] = useState(false);
  const createStateShowHandler = () => {
    changeState(true);
  };
  const createStateHideHandler = () => {
    changeState(false);
  };
  const {
    data: session,
    status,
  }: {
    data: Session | null;
    status: "authenticated" | "loading" | "unauthenticated";
  } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.replace("/auth");
  }
  return (
    <>
      <ul className="flex h-full w-full flex-row justify-around sm:flex-col sm:justify-normal">
        <NavButton name="Home" icon={<AiFillHome />} link="/" />
        <NavButton name="Explore" icon={<AiOutlineSearch />} />
        <NavButton name="Pitches" icon={<AiOutlineVideoCamera />} />
        <NavButton
          name="Messages"
          icon={<BiMessageSquareDetail />}
          className="hidden sm:block"
        />
        <NavButton name="Notifications" icon={<AiOutlineNotification />} />

        <NavButton
          name="Create"
          icon={<AiOutlinePlusSquare />}
          onClickHandler={createStateShowHandler}
        />
        {createState && <Create hide={createStateHideHandler} />}

        {session && session.user && session.user.username && (
          <NavButton
            name="Profile"
            icon={<AiOutlineUser />}
            link={session.user.username}
          />
        )}
      </ul>
      <MoreMenu className="hidden sm:block sm:py-0 md:py-2" />
    </>
  );
};
export default RootNav;
