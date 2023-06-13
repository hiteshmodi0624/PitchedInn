import { ChangeEventHandler, DragEventHandler } from "react";

const UploadImage = ({
  setUploadState,
  setDragState,
  setFiles,
  className,
  children,
}: {
  className?: string;
  setUploadState: (state: "selection"|"preview"|"final") => void;
  setDragState: (state: string) => void;
  setFiles: (fl: File) => void;
  children?: React.ReactNode;
}) => {
  const setImage = (file: File) => {
    setFiles(file);
    const objectURL = URL.createObjectURL(file);
    setUploadState("preview");
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
        className={`drop z-[60]  h-full cursor-default ${className}`}
        onDrop={drophandler}
        onDragOverCapture={dragEnterHandler}
        onDragLeaveCapture={dragEndHandler}
      >
        {children}
        <input
          type="file"
          id="upload-img"
          name="upload-img"
          accept="image/*"
          className="hidden"
          onChange={fileselectHandler}
        />
      </div>
    </>
  );
};
export default UploadImage;
