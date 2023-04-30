import { useParams } from "react-router-dom";
import ProfilePosts from "../../components/profile/modes/posts/profile-posts";
import { getProfilePosts } from "../../services/profile";

function UserSaved() {
    const params=useParams();
    console.log(params.username!)
    const posts=getProfilePosts(params.username!,"saved");
    return (
      <ProfilePosts posts={posts}/>
    );
  }
  
export default UserSaved;
