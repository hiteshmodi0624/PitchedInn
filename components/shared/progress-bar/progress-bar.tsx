import { useEffect, useRef } from "react";

const ProgressBar=()=>{
    return (
      <div className="absolute left-0 top-0 z-[60] w-screen" id="progress-bar">
        <div
          className={`h-0.5 w-0 bg-primary2 transition-all duration-1000`}
          id="progress"
        ></div>
      </div>
    );
}
export default ProgressBar;