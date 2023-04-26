import {  FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const NavButton: FC<{
    name: string;
    icon: JSX.Element;
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
}> = ({ name, icon, onClickHandler }) => {
    return (
        <>
            {onClickHandler ? (
                <button
                    className="p-2 my-1 hover:bg-gray rounded-full flex items-center w-full group"
                    onClick={onClickHandler}
                >
                    <div className="text-4xl font-bold mr-4 group-hover:scale-105 duration-200">
                        {icon}
                    </div>
                    <h3 className="text-xl">{name}</h3>
                </button>
            ) : (
                <Link
                    className="p-2 my-1 hover:bg-gray rounded-full flex items-center w-full group"
                    to={name.toLowerCase()}
                >
                    <div className="text-4xl font-bold mr-4 group-hover:scale-105 duration-200">
                        {icon}
                    </div>
                    <h3 className="text-xl">{name}</h3>
                </Link>
            )}
        </>
    );
};
export default NavButton;
