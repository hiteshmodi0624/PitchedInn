const ChatMessage = ({
  sender,
  message,
  post,
  time,
}: {
  sender: string;
  message: string;
  post?: string;
  time: string;
}) => {
  return (
    <div
      className={`flex flex-col space-y-1  ${
        sender === "self" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`w-max max-w-[300px] rounded-3xl p-2 px-4 ${
          sender === "self"
            ? "rounded-br-none bg-primary2 "
            : "rounded-bl-none bg-grey"
        }`}
      >
        {message}
      </div>
      <p className="text-xs text-grey">{time}</p>
    </div>
  );
};

export default ChatMessage;
