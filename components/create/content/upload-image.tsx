import { ChangeEventHandler, DragEventHandler } from "react";
import { IoMdPhotos } from "react-icons/io";

const UploadImage = ({
  className,
  setCreateState,
  setDragState,
  setFiles,
}: {
  className?: string;
  setCreateState: (state: string) => void;
  setDragState: (state: string) => void;
  setFiles: (fl: File) => void;
}) => {
  const setImage = (file: File) => {
    setFiles(file);
    const objectURL = URL.createObjectURL(file);
    setCreateState("crop");
    setDragState(objectURL);
  };
  const drophandler: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setImage(event.dataTransfer.files[0]!);
  };
  const fileselectHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]!);
    }
  };
  const dragEnterHandler: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setDragState("enter");
  };
  const dragEndHandler = () => {
    setDragState("end");
  };
  return (
    <>
      <div
        className={`drop z-[60] flex h-full cursor-default flex-col items-center justify-center text-white ${className}`}
        onDrop={drophandler}
        onDragOverCapture={dragEnterHandler}
        onDragLeaveCapture={dragEndHandler}
      >
        <IoMdPhotos className="text-7xl" />
        <h2 className="py-3 text-xl">Drag photos and videos here</h2>

        <label
          htmlFor="img"
          className="cursor-pointer rounded-full bg-primary2 px-6 py-2 file:bg-black hover:bg-primary2 hover:opacity-90"
        >
          Select from your device
        </label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          className="hidden"
          onChange={fileselectHandler}
        />
      </div>
    </>
  );
};
export default UploadImage;
