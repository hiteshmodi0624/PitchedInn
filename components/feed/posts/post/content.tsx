import { FC, useState } from "react";

const Content:FC<{content:string}>=({content})=>{
    const [showAll,setShowAll]=useState<boolean>(false);
    const openMore=()=>{
      setShowAll(prev=>!prev)
    }
    return (
        <>
            <p className="text-sm py-4 justify-center flex">
                {showAll ? content : content.substring(0, 250)}
                { content.length>250&&
                <button onClick={openMore} className="pl-2 text-blue-500 hover:text-blue-700 hover:underline">
                    {showAll ? (
                        <p>Hide</p>
                    ) : (
                        <p>Show More</p>
                    )}
                </button>
            }
            </p>
            
        </>
    );
  }
  
export default Content;
