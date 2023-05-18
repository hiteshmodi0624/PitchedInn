import { FC, PropsWithChildren, useRef } from "react";
import useMenuDirection from "../../hooks/useMenuDirection";

const HiddenMenu: FC<
    PropsWithChildren<{
        className?: string;
    }>
> = ({ children, className }) => {
    const triggerRef=useRef<HTMLUListElement>(null);
    const menuDirection=useMenuDirection(triggerRef);
    return (
        <ul
            className={`mx-3 border-seperator border-2 rounded-lg absolute z-20 bg-black overflow-hidden cursor-pointer 
                        ${menuDirection} ${className} `}
            ref={triggerRef}
        >
            {children}
        </ul>
    );
};
export default HiddenMenu;
