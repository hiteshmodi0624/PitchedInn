import Image from "next/image";
import { DragEventHandler, useEffect, useRef, useState } from "react";

type DispatchHandler = (val: number | undefined) => void;

const CreateImage = ({
  src,
  top,
  left,
  setLeft,
  setTop,
  containerWidth,
  className,
  containerRatio,
  containerHeight
}: {
  src: string;
  top: undefined | number;
  left: undefined | number;
  setLeft: DispatchHandler;
  setTop: DispatchHandler;
  containerWidth: number;
  containerRatio: number;
  containerHeight: number;
  className?: string;
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageRatio, setImageRatio] = useState<number>(1);
  const [loaded, setLoaded] = useState(false);
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
          containerWidth - imageWidth,
          Math.min(offsetX, 0)
        );
        const newTop = Math.max(
          containerHeight - imageHeight,
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
      if (image) {
        if(!loaded)
          setLoaded(true);
        const imageRatio =
          image.getBoundingClientRect().height /
          image.getBoundingClientRect().width;
        const containerDimention =
          containerRatio < imageRatio ? containerWidth : containerHeight;
        const imageHeight =
          containerRatio < imageRatio
            ? containerDimention * imageRatio
            : containerDimention;
        const imageWidth =
          containerRatio < imageRatio
            ? containerDimention
            : containerDimention / imageRatio;
        image.style.height = `${imageHeight}px`;
        image.style.width = `${imageWidth}px`;
        setImageRatio(() => imageRatio);
        if (top === undefined) setTop(-(imageHeight - containerHeight) / 2);
        if (left === undefined) setLeft(-(imageWidth - containerWidth) / 2);
      }
    };
    if (loaded && top === undefined) handleImageLoad();
    if (image) {
      image.addEventListener("load", handleImageLoad);
      return () => {
        image.removeEventListener("load", handleImageLoad);
      };
    }
  }, [
    imageRef,
    containerWidth,
    setLeft,
    setTop,
    top,
    left,
    imageRatio,
    containerHeight,
    containerRatio,
    loaded,
  ]);
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
