import { FC, useRef } from "react";
import Label from "./label";

const InteractionIcon: FC<{
    icon1: JSX.Element;
    icon2?: JSX.Element;
    onClick: () => void;
    state?: boolean;
    className?: string;
    title: string;
    count?: number;
    color?:string
}> = ({ icon1, icon2, onClick, state, className, title, count, color }) => {
    const triggerRef=useRef(null);
    return (
        <Label label={title}>
            <button
                onClick={onClick}
                className={`active:scale-150 active:duration-500 ${className} relative flex items-center space-x-2 hover:scale-110
            }`}
                style={{ color: state ? color : "white" }}
                ref={triggerRef}
            >
                {state ? icon2 : icon1}
                <p className="text-sm">{count}</p>
            </button>
        </Label>
    );
};
export default InteractionIcon;
