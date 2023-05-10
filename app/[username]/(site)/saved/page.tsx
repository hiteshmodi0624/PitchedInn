"use client"
import { getProfilePosts } from "@/services/profile";
import ProfilePosts from "../../components/modes/posts/profile-posts";

const UserSaved=({params}:{params:{username:string}})=>{
    const posts=getProfilePosts(params.username,"saved");
    return (
        <ProfilePosts posts={posts} />
    );
  }
  
export default UserSaved;
