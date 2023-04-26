import Posts from "../posts/posts";
import FeedMode from "./feed-mode";

function Feed() {
    return (
        <div className="h-screen grid">
            <FeedMode/>
            <Posts/>
        </div>
    );
  }
  
export default Feed;
