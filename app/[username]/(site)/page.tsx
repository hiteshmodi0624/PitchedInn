"use client"
import ProfilePosts from "@/app/[username]/components/modes/posts/profile-posts";
import { getProfilePosts } from "@/services/profile";

const UserPosts = ({ params }: { params: { username: string } }) => {
    const posts = getProfilePosts(params.username, "posts");
    return <ProfilePosts posts={posts} />;
};

export default UserPosts;
