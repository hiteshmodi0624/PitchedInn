import Card from "../ui/card";
import { FC } from "react";
import post from "../../../modals/post";
import { Link } from "react-router-dom";

const ProfilePost:FC<{post:post}>=({post})=>{
    return (
        <Link className="flex justify-center hover:opacity-80" to={`/${post.post.id}`}>
            <Card className="w-full aspect-square flex justify-center items-center bg-white">
                <img
                    src={post.post.data.postMedia}
                    alt={post.post.data.content}
                />
            </Card>
        </Link>
    );
  }
  
export default ProfilePost;
