import { useState } from "react";
import Posts from "../posts/posts";
import Heading from "../ui/heading";
import Card from "../ui/card";
import Modes from "../ui/mode/modes";

function Feed() {
    const [feedMode,setMode]=useState("All Posts");
    const setFeedMode=(mode:string)=>{
        setMode(mode);
    }
    return (
        <div className="h-screen grid w-full">
            <Card className="w-full sticky top-0 bg-black z-50">
                <Heading text="Home" />
                <Modes setMode={setFeedMode} mode={feedMode} modes={["All Posts","Entrepreneur"]}/>
            </Card>
            {feedMode==="All Posts"&&<Posts />}
        </div>
    );
  }
  
export default Feed;
