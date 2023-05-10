import { getPosts } from "../../../services/post";
import Post from "./post";

const Posts=()=>{
    const posts=getPosts();
    return (
        <ul className="pb-16">
            {posts.map((post) => (
                <li key={post.post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    );
}
  
export default Posts;
