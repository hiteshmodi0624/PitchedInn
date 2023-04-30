import { useParams } from "react-router-dom";
import ProfilePosts from "../../components/profile/modes/posts/profile-posts";
import { getProfilePosts } from "../../services/profile";

function UserPosts() {
    const params=useParams();
    const posts=getProfilePosts(params.username!,"posts");
    return (
      <ProfilePosts posts={posts}/>
    );
  }
  
export default UserPosts;
