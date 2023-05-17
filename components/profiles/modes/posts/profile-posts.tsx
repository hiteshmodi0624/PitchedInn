import { FC } from "react";
import ProfilePost from "./profile-post";

const ProfilePosts:FC<{posts:Post[]}>=({posts})=>{
    return (
        <ul className="grid grid-cols-2 gap-3 m-6">
            {posts.map((post) => (
                <li key={post.id}>
                    <ProfilePost post={post} />
                </li>
            ))}
        </ul>
    );
  }
  
export default ProfilePosts;
