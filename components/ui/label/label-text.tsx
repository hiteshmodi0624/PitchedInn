'use client';
import { FC, useRef } from "react";
import useMenuDirection from "../../hooks/useMenuDirection";

const LabelText: FC<{ label: string, className?:string }> = ({ label, className }) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const menuDirection = useMenuDirection(triggerRef);
    return (
        <div
            className={`absolute p-2 bg-gray2 text-white py-1 my-1 text-xs rounded z-20 whitespace-pre-line ${menuDirection} ${className}`}
            ref={triggerRef}
        >
            {label}
        </div>
    );
};
export default LabelText;
