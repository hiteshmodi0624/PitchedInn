import { getPosts } from "../../../src/util/post";
import Post from "./post";

const Posts=()=>{
    const posts=getPosts();
    return (
        <ul className="pb-16 mt-6 space-y-6">
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    );
}
  
export default Posts;
