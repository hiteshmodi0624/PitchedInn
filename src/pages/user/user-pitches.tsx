import { useParams } from "react-router-dom";
import ProfilePosts from "../../components/profile/modes/posts/profile-posts";
import { getProfilePosts } from "../../services/profile";

function UserPitches() {
    const params=useParams();
    const posts=getProfilePosts(params.username!,"pitches");
    return (
      <ProfilePosts posts={posts}/>
    );
  }
  
export default UserPitches;
