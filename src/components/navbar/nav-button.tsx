import {  FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Label from "../ui/label/label";

const NavButton: FC<{
    name: string;
    icon: JSX.Element;
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    className?: string
}> = ({ name, icon, onClickHandler, className }) => {
    const children = (
        <>
            <div className="sm:text-4xl text-3xl font-bold mr-4 group-hover:scale-105 duration-200">
                {icon}
            </div>
            <h3 className="text-xl hidden xl:block">{name}</h3>
        </>
    );
    const classes=`sm:p-2 sm:my-1 hover:bg-gray rounded-full flex items-center w-full group `;
    return (
        <div className={className}>
            {onClickHandler ? (
                <Label label={name} className="block xl:hidden">
                    <button className={classes} onClick={onClickHandler}>
                        {children}
                    </button>
                </Label>
            ) : (
                <Label label={name} className="block xl:hidden">
                    <Link className={classes} to={name.toLowerCase()}>
                        {children}
                    </Link>
                </Label>
            )}
        </div>
    );
};
export default NavButton;
