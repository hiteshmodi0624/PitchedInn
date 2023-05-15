import { FC } from "react";
import Card from "@/components/ui/card";
import { data } from "@/modals/post";
import SmallImage from "@/components/ui/small-image";

const PostMedia:FC<{data:data}>=({data})=>{
    return (
        <Card className="rounded-xl w-full flex justify-center bg-gray">
            {data.mediaType === "image" && (
                <SmallImage src={data.postMedia} alt="logo" className="max-h-min max-w-full overflow-hidden p-6" />
            )}
        </Card>
    );
  }
  
export default PostMedia;

