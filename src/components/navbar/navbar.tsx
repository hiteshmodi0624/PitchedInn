import { Link } from "react-router-dom";
import NavButton from "./nav-button";
import {AiFillHome, AiOutlineMessage, AiOutlineMore, AiOutlineNotification, AiOutlinePlusSquare, AiOutlineSearch, AiOutlineUser, AiOutlineVideoCamera} from "react-icons/ai"
import MoreMenu from "./more-menu";
import MenuToggler from "../ui/hidden-menu/menu-toggler";
import { brand } from "../../data/data";
import Image from "../ui/image";
function Navbar() {
    return (
        <nav className="sm:h-screen w-screen justify-center sm:w-full bg-black text-white border-seperator 
                        border-r-[1px] p flex flex-row sm:flex-col p-4 sm:justify-start">
            <Link to="/" className="hidden xl:block mb-6 my-2 mx-3">
                <Image src="logo.svg" alt={brand} />
            </Link>
            <Link to="/" className="hidden sm:block xl:hidden mb-6 my-2 mx-1">
                <Image src="favicon-white.ico" alt={brand} className="w-12" />
            </Link>
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
        </nav>
    );
  }
  
export default Navbar;
