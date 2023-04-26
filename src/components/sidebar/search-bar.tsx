import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import SearchList from "./search-list";
function SearchBar() {
    const [value, setValue] = useState<string>("");
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const onClose = (event: FormEvent) => {
        event.preventDefault();
        setValue("");
    };
    return (
        <div className="text-grey group bg-black">
            <form className="z-30 relative">
                <label className="absolute text-2xl z-10 top-5 pt-0.5 left-8 group-focus-within:text-primary">
                    <AiOutlineSearch />
                </label>
                <input
                    type="text"
                    className="w-full p-3 m-2 bg-gray h-max rounded-full pl-14 border-[1px] pr-12
                 focus:outline-none focus:border-primary border-black placeholder:text-grey placeholder:font-light text-white"
                    placeholder="Search Startups or Collections"
                    onChange={onInputChange}
                    value={value}
                />
                {value.length > 0 && (
                    <button
                        className="absolute text-2xl z-10 top-5 pt-0.5 right-2 group-focus-within:text-primary"
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
