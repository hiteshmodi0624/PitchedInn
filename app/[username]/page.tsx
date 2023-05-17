"use client"
import About from "@/components/profiles/modes/About/about";
import ProfilePosts from "@/components/profiles/modes/posts/profile-posts";
import { getDetails, getProfilePosts } from "@/util/profile";
import { useRouter } from "next/navigation";

const UserPosts = ({ params }: { params: { username: string } }) => {
    const posts = getProfilePosts(params.username, "posts");
    const router = useRouter();
    if(!posts){
        const businessProfile=getDetails(params.username)
        if(businessProfile)
            return <About details={businessProfile} />;
        else
            return router.replace(`/${params.username}`)
    }
        
    return <ProfilePosts posts={posts} />;
};

export default UserPosts;
