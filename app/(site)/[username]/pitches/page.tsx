"use client"
import ProfilePosts from "@/components/profiles/modes/posts/profile-posts";
import { getProfilePosts } from "@/util/profile";
import { useRouter } from "next/navigation";

const UserPitches=({params}:{params:{username:string}})=>{
    const posts = getProfilePosts(params.username, "posts");
    const router=useRouter();
    if(!posts)
        return router.replace("/")
    return (
        <ProfilePosts posts={posts} />
    );
  }
  
export default UserPitches;
 