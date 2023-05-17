
const Message = ({sender,message,post,time}:{sender:string,message:string,post?:string,time:string}) => {
    return (
        <div
            className={`flex flex-col space-y-1  ${
                sender === "self" ? "items-end" : "items-start"
            }`}
        >
            <div
                className={`rounded-3xl w-max px-4 p-2 max-w-[300px] ${
                    sender === "self"
                        ? "rounded-br-none bg-primary2 "
                        : "rounded-bl-none bg-grey"
                }`}
            >
                {message}
            </div>
            <p className="text-grey text-xs">{time}</p>
        </div>
    );
};

export default Message;
