import { useState } from "react";
import Card from "../ui/card";
import Mode from "./mode";
import Heading from "../ui/heading";

function FeedMode() {
    const [allPost,setAllPost]=useState<boolean>(true);
    const onPostClick=()=>{
        setAllPost(prev=>true);
    }
    const onEntreClick=()=>{
        setAllPost(prev=>false);
    }
    // underline  underline-offset-[16px] decoration-blue-600 decoration-4 
    return (
        <Card className="w-full sticky top-0 bg-black z-50">
            <Heading text="Home"/>
            <div className="grid grid-cols-2 text-grey">
                <Mode onClick={onPostClick} allPost={allPost} title="All Post"/>
                <Mode onClick={onEntreClick} allPost={allPost} title="Entrepreneur"/>
            </div>
        </Card>
    );
  }
  
export default FeedMode;
