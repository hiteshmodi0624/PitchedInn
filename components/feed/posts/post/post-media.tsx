import { FC } from "react";
import Card from "components/ui/card";
import Image from "next/image";

const PostMedia:FC<{mediaUrl:string[],mediaType:string}>=({mediaUrl})=>{
  console.log(mediaUrl[0]);
    return (
      <>
        {mediaUrl.map((url) => (
          <Card
            className="relative flex h-96 w-full justify-center overflow-hidden rounded-xl bg-gray"
            key={url}
          >
            <Image
              fill
              src={url}
              alt={url}
              style={{ objectFit: "contain" }}
            />
          </Card>
        ))}
      </>
    );
  }
  
export default PostMedia;

