import { FC } from "react";
import Card from "components/ui/card";
import SmallImage from "components/ui/small-image";

const PostMedia:FC<{data:Media}>=({data})=>{
    return (
        <Card className="rounded-xl w-full flex justify-center bg-gray">
            {data.mediaType === "image" && (
                <SmallImage src={data.mediaUrl} alt="logo" className="max-h-min max-w-full overflow-hidden p-6" />
            )}
        </Card>
    );
  }
  
export default PostMedia;

