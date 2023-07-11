import { FC, useRef, useState } from "react";

const Content:FC<{content:string}>=({content})=>{
    const [showAll,setShowAll]=useState<boolean>(false);
    const openMore=()=>{
      setShowAll(prev=>!prev)
    }
    const containerRef=useRef<HTMLDivElement>(null);
    const contentArray=content.replace(/\r?\n/g, '\n').replace(/\n+/g, '\n').split('\n')
    return (
      <>
        <div
          className={`py-2 text-sm ${!showAll && "max-h-12"} overflow-hidden`}
        >
          <div ref={containerRef} className="space-y-1.5">
            {contentArray.map((ln, i) => (
              <p key={i}>{ln}</p>
            ))}
          </div>
        </div>
        {(contentArray.length > 1 ||
          (contentArray[0] && contentArray[0].length > 60)) && (
          <button
            onClick={openMore}
            className=" text-sm text-blue-500 hover:text-blue-700 hover:underline"
          >
            {showAll ? <p>Hide</p> : <p>Show More</p>}
          </button>
        )}
      </>
    );
  }
  
export default Content;
