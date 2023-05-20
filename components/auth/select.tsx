"use client";

import { PropsWithChildren } from "react";

interface SelectProps {
  placeholder: string;
  className?: string;
  value: number | string | undefined;
  onChangeHandler?: React.ChangeEventHandler;
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
      name={placeholder.toLowerCase()}
      id={placeholder.toLowerCase()}
      value={value}
      onChange={onChangeHandler}
      className={`!my-1 h-max w-1/3 border-[1px] border-grey bg-transparent p-3 px-2 text-white 
              placeholder:font-light placeholder:text-grey focus:border-primary focus:outline-none 
              focus:placeholder:text-primary ${className}`}
    >
      {children}
    </select>
  );
};
export default Select;
