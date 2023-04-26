import { FC } from "react";

const Mode:FC<{onClick:()=>void,allPost:boolean,title:string}>=({onClick,allPost,title})=>{
    const active=`text-white max-w-max after:w-full after:left-1/2 after:-translate-x-1/2
     after:h-1 after:bg-blue-600 after:block after:absolute relative after:rounded-xl`
    return (
        <button
            className="w-full hover:bg-gray p-3 flex justify-center"
            onClick={onClick}
        >
            {title === "Entrepreneur" ? (
                <div className={`${!allPost && active}`}>{title}</div>
            ) : (
                <div className={`${allPost && active}`}>{title}</div>
            )}
        </button>
    );
}
export default Mode