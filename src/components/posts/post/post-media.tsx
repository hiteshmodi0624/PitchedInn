import { FC } from "react";
import { data } from "../../../../modals/post";
import Card from "../../ui/card";

const PostMedia:FC<{data:data}>=({data})=>{
    return (
        <Card className="rounded-xl max-h-96 w-full flex justify-center bg-gray">
            {data.mediaType === "image" && (
                <img src={data.postMedia} alt="logo" className="max-h-full p-2 max-w-full" />
            )}
        </Card>
    );
  }
  
export default PostMedia;

