"use client"

import { PropsWithChildren } from "react";

interface SelectProps {
  placeholder: string;
  className?:string;
  value:number|string|undefined;
  onChangeHandler?:React.ChangeEventHandler;
}

const Select = ({
    placeholder,
    className,
    onChangeHandler,
    value,
    children,
}: PropsWithChildren<SelectProps>) => {
    return (
        <select
            id={placeholder.toLowerCase()}
            value={value}
            onChange={onChangeHandler}
            className={`bg-transparent !my-1 w-1/3 p-3 px-2 h-max border-[1px] focus:outline-none focus:border-primary 
              focus:placeholder:text-primary border-grey placeholder:text-grey placeholder:font-light 
              text-white ${className}`}
        >
            {children}
        </select>
    );
};
export default Select