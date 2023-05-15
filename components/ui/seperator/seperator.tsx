const Seperator = ({ title }: { title: string }) => {
    return (
        <div
            className="flex items-center before:flex-1 after:flex-1 before:border-b-[1px] 
    before:border-seperator before:mx-2 after:border-b-[1px] after:border-seperator after:mx-2 text-center"
        >
            {title}
        </div>
    );
};
export default Seperator