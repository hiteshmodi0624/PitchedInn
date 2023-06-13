import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
const ImagesCaraousal = ({
  files,
  currentImageIndex,
  setCurrentImageIndex,
  imageClassName,
  mediaUrls
}: {
  files?: File[];
  mediaUrls?:string[];
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageClassName?:string;
}) => {
  return (
    <>
      {(files||mediaUrls)&&(files??mediaUrls??[]).length > currentImageIndex && (
        <>
          {currentImageIndex > 0 && (
            <button
              className="absolute left-1 z-30 flex h-10 w-10 items-center justify-center 
        rounded-full bg-gray bg-opacity-75 text-3xl text-white hover:opacity-80"
              onClick={() => {
                setCurrentImageIndex((prev) => prev - 1);
              }}
            >
              <AiOutlineArrowLeft />
            </button>
          )}
          <Image
            src={files?URL.createObjectURL(files[currentImageIndex]!):mediaUrls![currentImageIndex]!}
            height={1000}
            width={1000}
            alt={"Upload Preview"}
            className={`mx-auto ${imageClassName}`}
            draggable={false}
          />
          {currentImageIndex < (files??mediaUrls??[]).length - 1 && (
            <button
              className="absolute right-1 z-30 flex h-10 w-10 items-center justify-center 
      rounded-full bg-gray bg-opacity-75 text-3xl text-white hover:opacity-80"
              onClick={() => {
                setCurrentImageIndex((prev) => prev + 1);
              }}
            >
              <AiOutlineArrowRight />
            </button>
          )}
        </>
      )}
    </>
  );
};
export default ImagesCaraousal;