import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Image from "next/image";
import HiddenMenu from "../shared/hidden-menu/hidden-menu";
import UploadImage from "../shared/upload-image/upload-image";
import { TbBoxMultiple } from "react-icons/tb";
import { FormEvent, useEffect, useState } from "react";
import ImagesCaraousal from "../shared/image-carousal/images-carousal";
import UploadImageLabel from "../shared/upload-image/upload-image-label";
const PreviewImage = ({
  DragStateHandler,
  CreateStateHandler,
  setFiles,
  files,
}: {
  DragStateHandler: (url: string) => void;
  CreateStateHandler: (state: string) => void;
  setFiles: (fl: File, remove?: boolean) => void;
  files: File[];
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [hiddenMenu, showHiddenMenu] = useState(false);
  const onCloseHandler = (fl: File, i: number, event: FormEvent) => {
    event.preventDefault();
    if (files.length === 1) {
      CreateStateHandler("selection");
      DragStateHandler("end");
    } else if (currentImageIndex !== 0 && i <= currentImageIndex) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    setFiles(fl, true);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="absolute bottom-2 left-2 w-full">
        <button
          className="z-30 flex h-10 w-10 items-center 
        justify-center rounded-full bg-gray bg-opacity-75 text-xl text-white hover:bg-opacity-60"
          onClickCapture={() => showHiddenMenu((prev) => !prev)}
        >
          <TbBoxMultiple />
        </button>
        {hiddenMenu && (
          <UploadImage
            setDragState={DragStateHandler}
            setUploadState={CreateStateHandler}
            setFiles={setFiles}
            className="mx-2 flex items-center bg-gray bg-opacity-75 text-xl text-white hover:bg-opacity-60"
          >
            <HiddenMenu className="!bottom-full !top-auto flex h-32 w-11/12 overflow-scroll bg-gray p-2">
              <UploadImageLabel>
                <div className="rounded-full border-[1px] border-seperator p-3">
                  <AiOutlinePlus />
                </div>
              </UploadImageLabel>
              <div className="flex space-x-2 overflow-scroll">
                {files.map((fl, i) => {
                  const objectURL = URL.createObjectURL(fl);
                  return (
                    <div key={fl.name} className="relative bg-black">
                      <button
                        className="absolute right-1 top-1 rounded-full bg-gray 
                      bg-opacity-70 p-1 text-white hover:bg-opacity-60"
                        onClick={onCloseHandler.bind(this, fl, i)}
                      >
                        <AiOutlineClose />
                      </button>
                      <button
                        onClick={() => {
                          setCurrentImageIndex(i);
                        }}
                        className="h-full items-center"
                      >
                        <Image
                          src={objectURL}
                          height={1000}
                          width={1000}
                          alt={fl.name}
                          className="max-h-[6rem] w-auto max-w-[8rem]"
                          draggable={false}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </HiddenMenu>
          </UploadImage>
        )}
      </div>
      <div
        className="flex h-full items-center justify-center"
        onClickCapture={() => showHiddenMenu(false)}
      >
        <ImagesCaraousal
          files={files}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          imageClassName="max-h-[38rem] w-auto"
        />
      </div>
    </div>
  );
};
export default PreviewImage;
