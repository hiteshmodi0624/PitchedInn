import Card from "components/ui/card";
import { FC } from "react";
import Image from "components/ui/large-image";
import Link from "next/link";

const ProfilePost:FC<{post:Post}>=({post})=>{
    return (
        <Link className="flex justify-center hover:opacity-80" href={`/${post.id}`}>
            <Card className="w-full aspect-square flex justify-center items-center bg-white">
                <Image
                    src={post.media[0].mediaUrl}
                    alt={post.caption}
                />
            </Card>
        </Link>
    );
  }
  
export default ProfilePost;
