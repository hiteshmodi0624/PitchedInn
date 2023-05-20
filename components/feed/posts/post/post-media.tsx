import { FC } from "react";
import Card from "components/ui/card";
import SmallImage from "components/ui/small-image";

const PostMedia:FC<{mediaUrl:string[],mediaType:string}>=({mediaUrl,mediaType})=>{
    return (
      <>
        {mediaUrl.map((url) => (
          <Card
            className="flex w-full justify-center rounded-xl bg-gray"
            key={url}
          >
            {mediaType === "image" && (
              <SmallImage
                src={url}
                alt="logo"
                className="max-h-min max-w-full overflow-hidden p-6"
              />
            )}
          </Card>
        ))}
      </>
    );
  }
  
export default PostMedia;

