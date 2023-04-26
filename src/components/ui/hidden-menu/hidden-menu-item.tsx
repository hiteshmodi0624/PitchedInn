import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const HiddenMenuItem: FC<
    PropsWithChildren<{
        className?: string;
        to?: string;
        onClickHandler?: () => void;
        title?:string;
        icon?:JSX.Element
    }>
> = ({ children, className, to, onClickHandler, title, icon }) => {
    const text= <div className="flex justify-between w-full p-3">
                    <h3 className="text-sm block w-full">{title}</h3>
                    {icon&&<div className="text-xl font-bold mr-4 group-hover:scale-105 duration-200">
                        {icon}
                    </div>}
                </div>
    const element=<div className="p-3">{children}</div>
    return (
        <li
            className={`border-b-2 border-seperator last:border-b-0 hover:bg-gray ${className}`}
        >
            {to ? (
                <Link to={to}>{title?text:element}</Link>
            ) : (
                <button onClick={onClickHandler}>{title?text:element}</button>
            )}
        </li>
    );
};
export default HiddenMenuItem;
