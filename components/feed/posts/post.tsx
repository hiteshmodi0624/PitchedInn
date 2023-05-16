import Card from "../../ui/card";
import Interactions from "./post/interactions";
import PostMedia from "./post/post-media";
import Profile from "./post/profile";
import Content from "./post/content";
import { FC } from "react";
import { Post } from "@/modals/post";

const Post:FC<{post:Post}>=({post})=>{
    return (
        <Card className="w-full rounded-lg">
            <div className="flex justify-center">
                <div className="px-6 py-3 flex flex-col items-center w-full">
                    <Profile userId={post.userId} date={post.date}/>
                    <PostMedia data={post.media[0]} />
                    <Content content={post.caption} />
                    <div className="py-4 px-4 w-full">
                        <Interactions interactions={post.interactions} postId={post.id}/>
                    </div>
                </div>
            </div>
        </Card>
    );
  }
  
export default Post;
