import { dummyPosts } from "../../data/dummy-post";
import Post from "./post";

function Posts() {
    return (
        <ul className="pb-16">
            {dummyPosts.map((dummyPost) => (
                <li key={dummyPost.post.id}>
                    <Post post={dummyPost} />
                </li>
            ))}
        </ul>
    );
  }
  
export default Posts;
