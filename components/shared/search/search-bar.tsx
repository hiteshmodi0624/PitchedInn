"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import SearchList from "./search-list";
import Input from "components/ui/inputs/input";
function SearchBar({placeholder,className,divClasses}:{placeholder:string,className?:string,divClasses?:string}) {
    const [value, setValue] = useState<string>("");
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onClose = (event: FormEvent) => {
        event.preventDefault();
        setValue("");
    };
    return (
        <div className={`w-full text-grey group bg-black relative ${divClasses}`}>
            <form className="z-30 relative">
                <label className="absolute text-2xl z-10 top-6 left-8 group-focus-within:text-primary">
                    <AiOutlineSearch />
                </label>
                <Input
                    type="text"
                    className={` bg-gray rounded-full pl-14 pr-12 border-black placeholder:text-grey z-50 ${className}`}
                    placeholder={placeholder}
                    onChangeHandler={onInputChange}
                    value={value}
                />

                {value.length > 0 && (
                    <button
                        className="absolute text-2xl z-10 top-6 right-2 group-focus-within:text-primary"
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
