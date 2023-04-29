import { FC } from "react";
import Mode from "./mode";

const Modes:FC<{modes:string[],setMode:(mode:string)=>void,mode:string}>=({modes,setMode,mode})=>{

    return (
        <div className="grid grid-flow-col-dense text-grey w-full h-fit">
            {modes.map(modeTitle=><Mode setMode={setMode} title={modeTitle} mode={mode} key={modeTitle}/>)}
        </div>
    );
  }
  
export default Modes;
