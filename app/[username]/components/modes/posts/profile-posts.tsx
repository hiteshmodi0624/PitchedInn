import { FC } from "react";
import ProfilePost from "./profile-post";
import post from "@/modals/post";

const ProfilePosts:FC<{posts:post[]}>=({posts})=>{
    return (
        <ul className="grid grid-cols-2 gap-3 m-6">
            {posts.map((post) => (
                <li key={post.post.id}>
                    <ProfilePost post={post} />
                </li>
            ))}
        </ul>
    );
  }
  
export default ProfilePosts;
