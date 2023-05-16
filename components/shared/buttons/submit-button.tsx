"use client";
import { FC, useState } from "react";
import Button from "../../ui/button";
import { followHandler } from "../../../util/profile";

const SubmitButton: FC<{
    className?: string;
    name: string;
    disabled: boolean
}> = ({ className , name , disabled}) => {
    return (
        <button
            type="submit"
            className={`bg-primary text-white font-bold py-2 px-4 rounded-full w-full my-3 disabled:opacity-40 
        disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
        >
            {name}
        </button>
    );
};
export default SubmitButton;