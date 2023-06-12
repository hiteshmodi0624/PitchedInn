import Card from "../../ui/card";
import Interactions from "./post/interactions";
import PostMedia from "./post/post-media";
import Profile from "./post/profile";
import Content from "./post/content";
import { PostRouterProcedure } from "~/server/routers/post/post";
import { relativeDate } from "~/utils/rel-date";
const Posts = ({ posts }: { posts: PostRouterProcedure<"fetchAllPosts"> }) => {
  return (
    <ul className="mt-6 space-y-6 pb-16">
      {posts.map((post) => (
        <li key={post.id}>
          <Card className="w-full rounded-lg px-6 py-3">
            <Profile
              userId={post.creatorId}
              date={relativeDate(post.createdAt)}
            />
            <PostMedia mediaUrl={post.mediaUrl} mediaType={post.mediaType} />
            <Content content={post.caption} />
            <div className="w-full px-4 py-4">
              <Interactions
                collects={post.collect}
                comments={post.comment}
                likes={post.like}
                saves={post.save}
                shares={post.share}
                postId={post.id}
              />
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
