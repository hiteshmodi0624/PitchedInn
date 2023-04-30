import {  FC, MouseEventHandler } from "react";
import Button from "../ui/buttons/button";

const NavButton: FC<{
    name: string;
    icon: JSX.Element;
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    link?:string
}> = ({ name, icon, onClickHandler, className, link }) => {
    return (
        <Button
            icon={icon}
            name={name}
            onClickHandler={onClickHandler}
            labelClasses="block xl:hidden"
            iconClasses="sm:text-4xl text-3xl"
            nameClasses="ml-4 text-xl hidden xl:block"
            buttonClasses="sm:p-2 sm:my-1"
            className={className}
            link={link}
        />
    );
};
export default NavButton;
