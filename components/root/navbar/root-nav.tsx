"use client"
import {  FC } from "react";
import NavButton from "./nav-button";
import {AiFillHome, AiOutlineMessage, AiOutlineMore, AiOutlineNotification, AiOutlinePlusSquare, AiOutlineSearch, AiOutlineUser, AiOutlineVideoCamera} from "react-icons/ai"
import MoreMenu from "./more-menu";
import MenuToggler from "@/components/shared/hidden-menu/menu-toggler";
const RootNav: FC<{}> = () => {
    return (
        <>
            <ul className="flex sm:flex-col justify-around w-full sm:justify-normal flex-row h-full">
                <NavButton name="Home" icon={<AiFillHome />} link="/"/>
                <NavButton name="Explore" icon={<AiOutlineSearch />} />
                <NavButton name="Pitches" icon={<AiOutlineVideoCamera />} />
                <NavButton name="Messages" icon={<AiOutlineMessage />} className="hidden sm:block"/>
                <NavButton
                    name="Notifications"
                    icon={<AiOutlineNotification />}
                />
                <NavButton name="Create" icon={<AiOutlinePlusSquare />} />
                <NavButton name="Profile" icon={<AiOutlineUser />} />
            </ul>
            <MenuToggler
                button={
                    <NavButton
                        name="More"
                        icon={<AiOutlineMore />}
                        onClickHandler={()=>{}}
                    />
                }
                menu={<MoreMenu />}
                className="hidden sm:block"
            />
        </>
    )
};
export default RootNav;
