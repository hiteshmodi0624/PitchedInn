import React, { useRef, Dispatch, ChangeEventHandler } from "react";
import { ActionType } from "../../auth/reducers";
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
  label?: string;
  error?: string;
  validationChecker?: (
    value: string
  ) => SafeParseReturnType<string, string> | { success: boolean };
  onBlurCapture?: () => void;
  outerClass?:string;
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
  label,
  error,
  onBlurCapture,
  outerClass
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
    <div
      className={`group relative my-3 mb-6 w-full border-[1px] border-grey focus-within:border-primary ${outerClass} ${
        isValid === false &&
        "border-2 border-red-500 focus-within:border-red-500"
      } `}
    >
      {label && (
        <label
          htmlFor={id ?? type}
          className={`pl-3 text-xs
         font-light capitalize text-grey group-focus-within:text-primary ${
           isValid === false && "text-red-500 group-focus-within:text-red-500"
         }`}
        >
          {label}
        </label>
      )}
      <input
        name={id ?? type}
        id={id ?? type}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChangeHandler ?? dispatchHandler}
        onBlur={onBlurCapture??onBlurHandler}
        ref={inputRef}
        className={`h-max w-full p-3 text-white placeholder:font-light placeholder:text-grey focus:outline-none 
        focus:placeholder:text-primary  ${
          isValid === false &&
          "focus:placeholder:test-red-500placeholder:text-red-500"
        } ${className} ${label && "!my-0 !py-0 !pb-2 placeholder:opacity-0"}`}
      />
      {!isValid && error && (
        <p
          className={`absolute -bottom-4 left-3 text-xs font-light text-red-500`}
        >
          {error}
        </p>
      )}
    </div>
  );
};
export default Input;
