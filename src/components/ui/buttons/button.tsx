import {  FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Label from "../label/label";

const Button: FC<{
    name: string;
    icon?: JSX.Element;
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    iconClasses?: string;
    nameClasses?: string;
    labelClasses?: string;
    light?: boolean;
    buttonClasses?:string;
}> = ({ name, icon, onClickHandler, className, nameClasses , iconClasses, labelClasses, light, buttonClasses }) => {
    const children = (
        <>
            <div className={` font-bold group-hover:scale-105 duration-200 ${iconClasses}`}>
                {icon}
            </div>
            <h3 className={`${nameClasses}`}>
                {name}
            </h3>
        </>
    );
    const classes = `p-2 px-4 hover:bg-gray rounded-full flex items-center w-full group ${buttonClasses}`;
    return (
        <div className={className}>
            <Label label={name} className={`${labelClasses}`}>
                {onClickHandler ? (
                    <button className={`${classes}`} onClick={onClickHandler}>
                        {children}
                    </button>
                ) : (
                    <Link to={name.toLowerCase()} className={`${classes}`}>
                        {children}
                    </Link>
                )}
            </Label>
        </div>
    );
};
export default Button;
