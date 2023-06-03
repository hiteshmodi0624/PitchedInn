import { FC } from "react";
import { Post } from "@prisma/client";
import Link from "next/link";
import Card from "components/ui/card";
import Image from "next/image";

const ProfilePosts:FC<{posts:Post[]}>=({posts})=>{
    return (
      <ul className="m-6 grid grid-cols-2 gap-3">
        {posts.map((post) => (
          <li key={post.id} className="w-full overflow-hidden">
            <Link
              className="flex relative justify-center hover:opacity-80 h-96 bg-gray rounded-xl w-full"
              href={`/${post.id}`}
            >
              <Image
                fill
                src={post.mediaUrl[0]!}
                alt={post.caption}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  
export default ProfilePosts;
