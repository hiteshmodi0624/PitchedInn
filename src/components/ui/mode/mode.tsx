import { FC } from "react";

const Mode: FC<{
    setMode: (mode: string) => void;
    mode: string;
    title: string;
}> = ({ setMode, mode, title }) => {
    const active = `text-white max-w-max after:w-full after:left-1/2 after:-translate-x-1/2
     after:h-1 after:bg-blue-600 after:block after:absolute relative after:rounded-xl capitalize`;
    return (
        <button
            className="w-full hover:bg-gray p-3 flex justify-center"
            onClick={() => setMode(title)}
        >
            {title === mode ? (
                <div className={`${active}`}>{title}</div>
            ) : (
                <div className="capitalize">{title}</div>
            )}
        </button>
    );
};
export default Mode;
