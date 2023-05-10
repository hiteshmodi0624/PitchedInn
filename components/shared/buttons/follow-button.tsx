'use client';
import { FC, useState } from "react";
import Button from "../../ui/button";
import { followHandler } from "../../../services/profile";

const FollowButton:FC<{className?:string,username:string}> = ({className,username}) => {
    const [followState,changeState]=useState<boolean>(false);
    return (
        <Button
            onClickHandler={followHandler.bind(null,username,changeState)}
            name={followState? "Follow" : "Unfollow"}
            className={className}
            buttonClasses="bg-white text-gray text-sm font-bold hover:opacity-90 hover:bg-white"
        />
    );
};
export default FollowButton;
