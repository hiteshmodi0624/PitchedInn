"use client"
import ProfilePosts from "@/components/profiles/modes/posts/profile-posts";
import { getDetails, getProfilePosts } from "@/util/profile";
import { useRouter } from "next/navigation";

const UserPitches=({params}:{params:{username:string}})=>{
    const posts = getProfilePosts(params.username, "posts");
    const router=useRouter();
    if(!posts)
        return router.replace(`/${params.username}`)
    return (
        <ProfilePosts posts={posts} />
    );
  }
  
export default UserPitches;
 