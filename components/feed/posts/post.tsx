import Card from "../../ui/card";
import Interactions from "./post/interactions";
import PostMedia from "./post/post-media";
import Profile from "./post/profile";
import Content from "./post/content";
import { FC } from "react";
import post from "../../../modals/post";

const Post:FC<{post:post}>=({post})=>{
    return (
        <Card className="w-full rounded-lg">
            <div className="flex justify-center">
                <div className="px-6 py-3 flex flex-col items-center">
                    <Profile post={post} />
                    <PostMedia data={post.post.data} />
                    <Content content={post.post.data.content} />
                    <div className="py-4 px-4 w-full">
                        <Interactions interactions={post.post.interactions} postId={post.post.id}/>
                    </div>
                </div>
            </div>
        </Card>
    );
  }
  
export default Post;
