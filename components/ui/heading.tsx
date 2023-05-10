'use client';
import { FC } from "react";

const Heading: FC<{ text: string, className?:string }> = ({ text,className }) => {
    return <h1 className={`text-xl font-extrabold p-3 text-white ${className}`}>{text}</h1>;
};
export default Heading;
