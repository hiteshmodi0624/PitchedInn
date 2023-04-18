import { FC } from "react";
import { Link } from "react-router-dom";

const NavButton:FC<{name:string,icon:JSX.Element}>=({name,icon})=>{
    return (
        <Link
            className="p-3 my-1 hover:bg-primary rounded-full flex items-center w-full group"
            to={name.toLowerCase()}
        >
            <div className="text-3xl font-bold mr-4 group-hover:scale-105 duration-200">{icon}</div>
            <h3 className="text-base">{name}</h3>
        </Link>
    );
}
export default NavButton;