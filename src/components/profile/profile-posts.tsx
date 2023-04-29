import { dummyPosts } from "../../data/dummy-post";
import ProfilePost from "./profile-post";

const ProfilePosts=()=>{
    return (
        <ul className="pb-16 grid grid-cols-2 gap-3 m-6">
            {dummyPosts.map((dummyPost) => (
                <li key={dummyPost.post.id}>
                    <ProfilePost post={dummyPost} />
                </li>
            ))}
        </ul>
    );
  }
  
export default ProfilePosts;
