const SubmitButton = ({
    className,
    name,
    disabled,
}: {
    className?: string;
    name: string;
    disabled: boolean;
}) => {
    return (
        <button
            type="submit"
            className={`bg-primary text-white font-bold py-2 px-4 rounded-full w-full my-3 disabled:opacity-40 
        disabled:cursor-not-allowed ${className}`}
            disabled={disabled}
        >
            {name}
        </button>
    );
};
export default SubmitButton;