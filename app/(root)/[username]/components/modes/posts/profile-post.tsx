import Card from "@/components/ui/card";
import { FC } from "react";
import post from "@/modals/post";
import Image from "@/components/ui/large-image";
import Link from "next/link";

const ProfilePost:FC<{post:post}>=({post})=>{
    return (
        <Link className="flex justify-center hover:opacity-80" href={`/${post.post.id}`}>
            <Card className="w-full aspect-square flex justify-center items-center bg-white">
                <Image
                    src={post.post.data.postMedia}
                    alt={post.post.data.content}
                />
            </Card>
        </Link>
    );
  }
  
export default ProfilePost;
