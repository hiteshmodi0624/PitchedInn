import { useState } from "react";
import Posts from "./posts/posts";
import Modes from "../shared/mode/modes";
import ContentLayout from "../shared/content-layout/content-layout";

function Feed({page}:{page:string}) {
    const [feedMode,setMode]=useState("All Posts");
    const setFeedMode=(mode:string)=>{
        setMode(mode);
    }
    const modes=<Modes setMode={setFeedMode} mode={feedMode} modes={["All Posts","Entrepreneur"]}/>
    return (
        <ContentLayout page={page} headerContent={modes}>
            {feedMode === "All Posts" && <Posts />}
        </ContentLayout>
    );
  }
  
export default Feed;
