import { FC } from "react";
import Card from "components/ui/card";
import Image from "next/image";

const PostMedia:FC<{mediaUrl:string[],mediaType:string}>=({mediaUrl})=>{
    return (
      <>
        {mediaUrl.map((url) => (
          <div
            className="relative flex h-96 w-full justify-center overflow-hidden rounded-xl bg-gray"
            key={url}
          >
            <Image fill src={url} alt={url} style={{ objectFit: "contain" }} />
          </div>
        ))}
      </>
    );
  }
  
export default PostMedia;

