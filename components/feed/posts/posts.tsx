import { PostRouterProcedure } from "~/server/routers/post/post";
import Post from "./post";
const Posts = ({ posts }: { posts: PostRouterProcedure<"fetchAllPosts"> }) => {
  return (
    <ul className="mt-6 space-y-6 pb-16">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
