import { Link } from "react-router-dom";
import NavButton from "./nav-button";
import {AiFillHome, AiOutlineMessage, AiOutlineMore, AiOutlineNotification, AiOutlinePlusSquare, AiOutlineSearch, AiOutlineUser, AiOutlineVideoCamera} from "react-icons/ai"
import MoreMenu from "./more-menu";
import MenuToggler from "../ui/hidden-menu/menu-toggler";
function Navbar() {
    return (
        <nav className="h-screen w-full bg-black text-white border-seperator  border-r-[1px] p flex flex-col p-4 justify-start">
            <Link to="/home">
                <img src="logo.svg" alt="SharkWave" className="w-9/12" />
            </Link>
            <ul className="flex flex-col h-full">
                <NavButton name="Home" icon={<AiFillHome />} />
                <NavButton name="Explore" icon={<AiOutlineSearch />} />
                <NavButton name="Pitches" icon={<AiOutlineVideoCamera />} />
                <NavButton name="Messages" icon={<AiOutlineMessage />} />
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
            />
        </nav>
    );
  }
  
export default Navbar;
