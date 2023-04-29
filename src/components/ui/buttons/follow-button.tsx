import { FC, MouseEvent, useState } from "react";
import Button from "./button";

const FollowButton:FC<{following:boolean,className?:string}> = ({following,className}) => {
    const [followState,changeState]=useState<boolean>(following);
    const onClickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        changeState(prev=>!prev);
    }
    return (
        <Button
            onClickHandler={onClickHandler} 
            name={followState? "Follow" : "Unfollow"}
            light={true}
            className={className}
            buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
        />
    );
};
export default FollowButton;
