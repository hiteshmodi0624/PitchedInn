import { FC, useState } from "react"; 
import ImagesCaraousal from '../../../shared/image-carousal/images-carousal';

const PostMedia:FC<{mediaUrl:string[],mediaType:string}>=({mediaUrl})=>{
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    return (
      <div className="relative flex items-center h-[38rem]">
        <ImagesCaraousal
          mediaUrls={mediaUrl}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          imageClassName="max-h-[38rem] w-auto rounded-xl mx-auto border-seperator border-[1px]"
        />
      </div>
    );
  }
  
export default PostMedia;

