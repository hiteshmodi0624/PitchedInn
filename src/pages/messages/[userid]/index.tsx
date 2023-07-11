import Input from "components/ui/inputs/input";
import ContentLayout from "components/shared/content-layout/content-layout";
import { ChangeEvent, useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile, MdGifBox, MdPhoto, MdSend } from "react-icons/md";
import MessagesHeader from "components/messages/messages-header";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import ChatMessages from "components/messages/chat-messages";
import { pusherClient } from "../../../server/pusher";
import { toPusherKey } from "../../../utils/pusher";

const Messages = () => {
  const router = useRouter();
  const id = router.query.userid as string;
  const profile = trpc.user.getUserInfo.useQuery({ id: id });
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const messages = trpc.user.chat.findMessages.useQuery({ id });
  const sendMessage = trpc.user.chat.sendMessage.useMutation();
  const isTypingMutation = trpc.user.chat.isTyping.useMutation();
  const [isTyping,setIsTyping]=useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    if (event.target.value !== "" ) {
      if(isTyping == false){
        isTypingMutation.mutate({ typing: true });
        setIsTyping(true);
      }
    } else {
      if(isTyping == true){
        isTypingMutation.mutate({ typing: false });
        setIsTyping(false);
      }
    };
  };

  const onBlurHandler = () => {
    if (isTyping === true) {
      isTypingMutation.mutate({ typing: false });
      setIsTyping(false);
    }
  };
  const onFocusHandler = () => {
    isTypingMutation.mutate({ typing: true });
  };

  const [otherUserTyping, setOtherUserTyping] = useState<boolean>(false);

  useEffect(() => {
    pusherClient.subscribe(toPusherKey(`chat:${id}`));
    const typingHandler = (typing: boolean) => {
      setOtherUserTyping(typing);
    };

    pusherClient.bind("typing", typingHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${id}`));
      pusherClient.unbind("typing", typingHandler);
    };
  }, [id]);

  if (profile.isLoading) return <div></div>;
  if (!profile.data || !session?.user.id) {
    router.replace("/404");
    return <div></div>;
  }
  const onSendHandler = async () => {
    await sendMessage.mutateAsync({
      content: message,
      creatorId: id,
      chatId: messages.data?.id,
    });
    setMessage("")
  };
  
  return (
    <ContentLayout
      headerContent={
        <MessagesHeader
          description={messages.data?.groupName}
          image={messages.data?.photo}
          name={messages.data?.groupName}
          typing={otherUserTyping}
        />
      }
      className="h-screen"
    >
      <div className="my-6 flex h-full w-full flex-col overflow-scroll border-[1px] border-seperator">
        <div className=" flex h-full w-full flex-col justify-end border-[1px]  border-seperator bg-black px-2">
          <div className="flex w-full flex-col space-y-1 overflow-scroll py-2">
            {messages.data?.messages && (
              <ChatMessages messages={messages.data.messages} />
            )}
          </div>
          <div
            className="my-2 flex h-min w-full items-center space-x-2
                     rounded-full border-[1px] border-seperator bg-transparent px-4"
          >
            <div
              className="left-icons flex space-x-1 text-xl"
              onBlurCapture={onBlurHandler}
              onFocusCapture={onFocusHandler}
            >
              <BsEmojiSmile />
              <MdGifBox />
              <MdAttachFile />
              <MdPhoto />
            </div>
            <Input
              value={message}
              placeholder="Start a new message"
              type="text"
              onChangeHandler={onChangeHandler}
              className="border-0 bg-transparent py-1 placeholder:!text-grey"
              onBlurCapture={onBlurHandler}
            />
            <button
              className="left-icons flex space-x-2 text-xl"
              onClick={onSendHandler}
            >
              <MdSend />
            </button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Messages;
