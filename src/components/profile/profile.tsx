import { useState } from "react";
import { dummyPosts } from "../../data/dummy-post";
import ProfileData from "./profile-data/profile-data";
import ProfilePosts from "./profile-posts";
import Modes from "../ui/mode/modes";

function Profile() {
    const [profileMode,setMode]=useState("Posts");
    const setProfileMode=(mode:string)=>{
        setMode(mode);
    }
    return (
        <div className="h-screen">
            <ProfileData profile={dummyPosts[0].profile}/>
            <Modes setMode={setProfileMode} mode={profileMode} modes={["About","Posts","Reels"]}/>
            {profileMode==="Posts"&&<ProfilePosts/>}
        </div>
    );
  }
  
export default Profile;
