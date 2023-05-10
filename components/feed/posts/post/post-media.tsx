import { FC } from "react";
import Card from "../../../ui/card";
import Image from "../../../ui/image";
import { data } from "../../../../modals/post";

const PostMedia:FC<{data:data}>=({data})=>{
    return (
        <Card className="rounded-xl max-h-96 w-full flex justify-center bg-gray">
            {data.mediaType === "image" && (
                <Image src={data.postMedia} alt="logo" className="max-h-full p-2 max-w-full" />
            )}
        </Card>
    );
  }
  
export default PostMedia;

