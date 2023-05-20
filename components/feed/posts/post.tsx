import Card from "../../ui/card";
import Interactions from "./post/interactions";
import PostMedia from "./post/post-media";
import Profile from "./post/profile";
import Content from "./post/content";
import { FC } from "react";
import { relativeDate } from "~/utils/rel-date";
import { Interactions as InteractionsType } from "types/post";
import { PostRouterProcedure } from "~/server/routers/post/post";
import { notFound } from "next/navigation";

const Post: FC<{ post: PostRouterProcedure<"findPostById"> }> = ({ post }) => {
  if (!post) return notFound();
  const time = relativeDate(post.createdAt);
  const interactions: InteractionsType = {
    collects: post.collects,
    comments: post.comments,
    likes: post.likes,
    saves: post.saves,
    shares: post.shares,
  };
  return (
    <Card className="w-full rounded-lg">
      <div className="flex justify-center">
        <div className="flex w-full flex-col items-center px-6 py-3">
          <Profile userId={post.userId} date={time} />
          <PostMedia mediaUrl={post.mediaUrl} mediaType={post.mediaType} />
          <Content content={post.caption} />
          <div className="w-full px-4 py-4">
            <Interactions interactions={interactions} postId={post.id} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
