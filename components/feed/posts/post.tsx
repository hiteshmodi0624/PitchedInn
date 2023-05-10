import Card from "../../ui/card";
import Interactions from "./post/interactions";
import PostMedia from "./post/post-media";
import Profile from "./post/profile";
import Content from "./post/content";
import { FC } from "react";

import ProfilePicture from "../../shared/profile-picture";
import post from "../../../modals/post";

const Post:FC<{post:post}>=({post})=>{
    return (
        <Card className="w-full">
            <div className="flex justify-center">
                <ProfilePicture profilePic={post.profile.profilePic} className="h-10 sm:h-12 m-3"/>
                <div className="pr-6 flex flex-col items-center">
                    <Profile post={post} />
                    <Content content={post.post.data.content} />
                    <PostMedia data={post.post.data} />
                    <div className="py-4 sm:pr-10 w-full">
                        <Interactions interactions={post.post.interactions} postId={post.post.id}/>
                    </div>
                </div>
            </div>
        </Card>
    );
  }
  
export default Post;
