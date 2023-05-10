'use client';
import { FC, PropsWithChildren } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Accordian: FC<
    PropsWithChildren<{ className?: string; heading: string }>
> = ({ heading, className, children }) => {
    return (
        <details className={`${className}`}>
            <summary className="flex justify-between cursor-pointer text-2xl w-full">
                <h3 className=" font-semibold text-white">{heading}</h3>
                <BsArrowDownCircleFill />
            </summary>
            <div className="mt-4">{children}</div>
        </details>
    );
};

export default Accordian;
