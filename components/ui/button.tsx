import {  FC, MouseEventHandler } from "react";
import Label from "./label/label";
import Link from "next/link";

const Button: FC<{
    name: string;
    icon?: JSX.Element;
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    iconClasses?: string;
    nameClasses?: string;
    labelClasses?: string;
    buttonClasses?:string;
    link?:string
}> = ({ name, icon, onClickHandler, className, nameClasses , iconClasses, labelClasses, link, buttonClasses }) => {
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
    const classes = `p-2 px-4 hover:bg-gray rounded-full flex items-center group ${buttonClasses}`;
    return (
        <div className={className}>
            <Label label={name} className={`${labelClasses}`}>
                {onClickHandler ? (
                    <button className={`${classes}`} onClick={onClickHandler}>
                        {children}
                    </button>
                ) : (
                    <Link href={`/${link??name.toLowerCase()}`} className={`${classes}`}>
                        {children}
                    </Link>
                )}
            </Label>
        </div>
    );
};
export default Button;
