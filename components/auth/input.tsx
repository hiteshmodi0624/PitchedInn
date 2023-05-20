"use client";
import React, { useRef, Dispatch, ChangeEventHandler } from "react";
import { ActionType } from "./reducers";
import { SafeParseReturnType } from "zod";

interface InputProps {
  type: string;
  placeholder: string;
  isValid?: boolean;
  className?: string;
  value: string;
  id?: string;
  dispatchInput?: Dispatch<ActionType>;
  onChangeHandler?: ChangeEventHandler;
  validationChecker?: (
    value: string
  ) => SafeParseReturnType<string, string> | { success: boolean };
}
const Input = ({
  type,
  placeholder,
  isValid,
  className,
  value,
  id,
  dispatchInput,
  onChangeHandler,
  validationChecker,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (dispatchInput)
      dispatchInput({
        type: "USER_INPUT",
        state: {
          value,
          isValid: validationChecker ? validationChecker(value).success : false,
        },
      });
  };
  const onBlurHandler = () => {
    if (dispatchInput) dispatchInput({ type: "INPUT_BLUR" });
  };
  return (
    <input
      name={id ?? type}
      id={id ?? type}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChangeHandler ?? dispatchHandler}
      onBlur={onBlurHandler}
      ref={inputRef}
      className={`my-3 h-max w-full border-[1px] border-grey p-3 text-white 
              placeholder:font-light placeholder:text-grey focus:border-primary focus:outline-none 
              focus:placeholder:text-primary ${
                isValid === false &&
                "border-2 border-red-500 placeholder:text-red-500"
              } ${className}`}
    />
  );
};
export default Input;
