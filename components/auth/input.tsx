"use client"
import React, {  useRef, Dispatch,  ChangeEventHandler } from 'react';
import { ActionType } from './signup/signup-reducers';

interface InputProps {
  type: string;
  placeholder: string;
  isValid?: boolean;
  className?:string;
  value:string;
  id?:string
  dispatchInput?:Dispatch<ActionType>
  onChangeHandler?:ChangeEventHandler;
}
const Input = ({ type, placeholder, isValid, className , value , id , dispatchInput ,onChangeHandler }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(dispatchInput)
      dispatchInput({ type: "USER_INPUT", val: event.target.value });
  };
  const onBlurHandler = () => {
    if (dispatchInput) 
      dispatchInput({ type: "INPUT_BLUR" });
  };
  return (
          <input
              id={id?id:type}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={onChangeHandler?onChangeHandler:dispatchHandler}
              onBlur={onBlurHandler}
              ref={inputRef}
              className={`w-full p-3 my-3 h-max border-[1px] focus:outline-none focus:border-primary 
              focus:placeholder:text-primary border-grey placeholder:text-grey placeholder:font-light 
              text-white ${isValid===false && "border-2 border-red-500 placeholder:text-red-500"
              } ${className}`}
          />
  );
};
export default Input