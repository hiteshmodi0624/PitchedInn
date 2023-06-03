import Image from "next/image";
import { Dispatch, DragEventHandler, SetStateAction, useEffect, useRef, useState } from "react";

type DispatchHandler = (val:number|undefined)=>void;

const CreateImage = ({
  src,
  top,
  left,
  setLeft,
  setTop,
  containerDimension,
  className,
}: {
  src: string;
  top: undefined | number;
  left: undefined | number;
  setLeft: DispatchHandler;
  setTop: DispatchHandler;
  containerDimension: number;
  className?: string;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageRatio, setImageRatio] = useState<number>(1);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart: DragEventHandler<HTMLImageElement> = (event) => {
    setDragging(true);
    const imageRect = imageRef.current?.getBoundingClientRect();
    if (imageRect) {
      if (left === undefined || top === undefined)
        setDragOffset({ x: event.clientX, y: event.clientY });
      else setDragOffset({ x: event.clientX - left, y: event.clientY - top });
    }
  };

  const handleDrag: DragEventHandler<HTMLImageElement> = (event) => {
    if (dragging) {
      const imageRect = imageRef.current?.getBoundingClientRect();
      if (imageRect) {
        const imageWidth = imageRect.width;
        const imageHeight = imageRect.height;

        const offsetX = event.clientX - dragOffset.x;
        const offsetY = event.clientY - dragOffset.y;

        const newLeft = Math.max(
          containerDimension - imageWidth,
          Math.min(offsetX, 0)
        );
        const newTop = Math.max(
          containerDimension - imageHeight,
          Math.min(offsetY, 0)
        );
        setLeft(newLeft);
        setTop(newTop);
      }
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };
  useEffect(() => {
    const image = imageRef.current;
    const handleImageLoad = () => {
      console.log(containerDimension);
      if (image) {
        const imageRatio =
          image.getBoundingClientRect().height /
          image.getBoundingClientRect().width;
        const imageHeight = Math.max(
          containerDimension,
          containerDimension * imageRatio
        );
        const imageWidth = Math.max(
          containerDimension,
          containerDimension / imageRatio
        );
        image.style.height = `${imageHeight}px`;
        image.style.width = `${imageWidth}px`;
        setImageRatio((prev) => imageRatio);
        if (top === undefined) setTop(-(imageHeight - containerDimension) / 2);
        if (left === undefined) setLeft(-(imageWidth - containerDimension) / 2);
      }
    };
    if (image) {
      image.addEventListener("load", handleImageLoad);
      return () => {
        image.removeEventListener("load", handleImageLoad);
      };
    }
  }, [imageRef, containerDimension, setLeft, setTop, top, left, imageRatio]);
  return (
    <div
      className={`relative aspect-square h-full w-full cursor-grab overflow-hidden ${className}`}
      style={{ cursor: dragging ? "grabbing" : "grab" }}
    >
      <Image
        src={`${src !== "end" ? src : "/"}`}
        alt="create-image"
        width={1000}
        height={1000}
        className="relative h-max w-max max-w-none"
        style={{
          top: `${top}px`,
          left: `${left}px`,
        }}
        ref={imageRef}
        draggable={false}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUpCapture={handleDragEnd}
        onMouseLeave={handleDragEnd}
        id="post-image"
      />
    </div>
  );
};

export default CreateImage;
