import {  FC, PropsWithChildren, useRef } from "react";
import useMenuDirection from "../../hooks/useMenuDirection";

const Label :FC<PropsWithChildren<{className?:string,label:string}>>= ({className,children,label})  => {
    const triggerRef=useRef(null);
    const menuDirection=useMenuDirection(triggerRef)
    return (
        <div
            className={`${className} before:bg-gray2 before:p-2 before:absolute  before:bg-gray-600 before:text-white
        before:py-1 before:my-1 before:content-[attr(about)] before:text-xs before:hidden hover:before:block relative before:rounded ${
            menuDirection === "down" ? "before:top-full" : "before:bottom-full"
        }`}
            ref={triggerRef}
            about={label}
        >
            {children}
        </div>
    );
};
export default Label;
