import { RefObject, useEffect, useState } from "react";

export const useContainerDimensions = (myRef: RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({ width: undefined, height: undefined });
  const { current: container } = myRef;
  useEffect(() => {
    const setDimensionsHandler = () => {
      if (container) {
        const width = container.getBoundingClientRect().width;
        const height = container.getBoundingClientRect().height;
        setDimensions({
          width,
          height,
        });
      }
    };
    window.addEventListener("resize", setDimensionsHandler);
    window.addEventListener("change", setDimensionsHandler);
    return () => {
      window.removeEventListener("resize", setDimensionsHandler);
      window.addEventListener("change", setDimensionsHandler);
    };
  }, [myRef, container]);

  return dimensions;
};
