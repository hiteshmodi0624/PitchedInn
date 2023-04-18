import { FC, PropsWithChildren } from "react";

const Card:FC<PropsWithChildren>=({children})=>{
    return (
        <div className="border-gray-500 border-2">
            {children}
        </div>
    );
}
export default Card;