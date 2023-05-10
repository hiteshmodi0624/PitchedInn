"use client"
import ProfilePosts from "@/app/[username]/components/modes/posts/profile-posts";
import { getProfilePosts } from "@/services/profile";

const UserPitches=({params}:{params:{username:string}})=>{
    const posts=getProfilePosts(params.username,"pitches");
    return (
        <ProfilePosts posts={posts} />
    );
  }
  
export default UserPitches;
 