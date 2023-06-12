import { FC } from "react";
import Card from "components/ui/card";
import Image from "next/image";

const PostMedia:FC<{mediaUrl:string[],mediaType:string}>=({mediaUrl})=>{
    return (
      <>
        {mediaUrl.map((url) => (
          <Image
            height={1000}
            width={1000}
            src={url}
            alt={url}
            className="max-h-[32rem] min-h-[24rem] w-auto rounded-xl mx-auto border-seperator border-[1px]"
            key={url}
          />
        ))}
      </>
    );
  }
  
export default PostMedia;

