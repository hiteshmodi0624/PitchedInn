import { FC, MouseEvent, useState } from "react";

const FollowButton:FC<{following:boolean}> = ({following}) => {
    const [followState,changeState]=useState<boolean>(following);
    const onClickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        changeState(prev=>!prev);
    }
    return (
        <button
            className="bg-white text-gray rounded-full p-2 text-center text-sm font-bold px-4 hover:opacity-90"
            onClick={onClickHandler}
        >
            {followState ? "Follow" : "Following"}
        </button>
    );
};
export default FollowButton;
