import { FC, PropsWithChildren, useRef } from "react";
import useMenuDirection from "../../hooks/useMenuDirection";

const HiddenMenu: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  const triggerRef = useRef<HTMLUListElement>(null);
  const menuDirection = useMenuDirection(triggerRef);
  return (
    <ul
      className={`absolute z-20 mx-3 cursor-pointer overflow-hidden rounded-lg border-2 border-seperator bg-black 
                        ${menuDirection} ${className} `}
      ref={triggerRef}
    >
      {children}
    </ul>
  );
};
export default HiddenMenu;
