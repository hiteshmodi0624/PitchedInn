"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import SearchList from "./search-list";
import Input from "components/ui/inputs/input";
function SearchBar({
  placeholder,
  className,
  divClasses,
  borderClass,
}: {
  placeholder: string;
  className?: string;
  divClasses?: string;
  borderClass?: string;
}) {
  const [value, setValue] = useState<string>("");
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onClose = (event: FormEvent) => {
    event.preventDefault();
    setValue("");
  };
  return (
    <div className={`group relative w-full bg-black text-grey ${divClasses}`}>
      <form className="relative z-30">
        <label className="absolute left-6 top-2 z-10 text-2xl group-focus-within:text-primary sm:top-3" htmlFor="search-bar">
          <AiOutlineSearch />
        </label>
        <Input
          id="search-bar"
          type="text"
          className={` z-50 border-black bg-gray !pl-14 pr-12 placeholder:text-grey sm:rounded-full ${className}`}
          placeholder={placeholder}
          onChangeHandler={onInputChange}
          value={value}
          outerClass={`sm:rounded-full border-0 ${borderClass}`}
        />

        {value.length > 0 && (
          <button
            className="absolute right-4 top-2 z-10 text-2xl group-focus-within:text-primary sm:top-3"
            onClick={onClose}
          >
            <AiFillCloseCircle />
          </button>
        )}
      </form>
      {value.length > 0 && <SearchList search={value} />}
    </div>
  );
}

export default SearchBar;
