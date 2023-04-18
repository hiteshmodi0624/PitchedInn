import { Link } from "react-router-dom";
import NavButton from "../ui/nav-button";
import {AiFillHome, AiOutlineCompass, AiOutlineMessage, AiOutlineMore, AiOutlineNotification, AiOutlinePlusSquare, AiOutlineSearch, AiOutlineUser, AiOutlineVideoCamera} from "react-icons/ai"
function Navbar() {
    return (
      <div className="h-screen w-full bg-black text-white border-seperator  border-r-[1px] p flex flex-col p-8 px-4 justify-start">
            <Link to="/home" className="mb-4">
                <img src="logo.png" alt="SharkWave" className="w-9/12"/>
            </Link>
            <ul className="flex flex-col h-full">
                <NavButton name="Home" icon={<AiFillHome/>}/>
                <NavButton name="Search" icon={<AiOutlineSearch/>}/>
                <NavButton name="Explore" icon={<AiOutlineCompass/>}/>
                <NavButton name="Pitches" icon={<AiOutlineVideoCamera/>}/>
                <NavButton name="Messages" icon={<AiOutlineMessage/>}/>
                <NavButton name="Notifications" icon={<AiOutlineNotification/>}/>
                <NavButton name="Create" icon={<AiOutlinePlusSquare/>}/>
                <NavButton name="Profile" icon={<AiOutlineUser/>}/>
            </ul>
            <NavButton name="More" icon={<AiOutlineMore/>}/>
      </div>
    );
  }
  
export default Navbar;
