'use client';
import { FC, PropsWithChildren } from "react";

const Card:FC<PropsWithChildren<{className?:string}>>=({children,className})=>{
    return (
        <div className={`border-seperator border-[1px] bg-black 
        justify-start items-start h-fit w-fit text-white ${className}`}>
            {children}
        </div>
    );
}
export default Card;