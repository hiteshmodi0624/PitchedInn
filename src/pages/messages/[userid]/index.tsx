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
  const [isTyping, setIsTyping] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    if (event.target.value !== "") {
      if (isTyping == false) {
        isTypingMutation.mutate({ typing: true, chatId: id });
        setIsTyping(true);
      }
    } else {
      if (isTyping == true) {
        isTypingMutation.mutate({ typing: false, chatId: id });
        setIsTyping(false);
      }
    }
  };

  const onBlurHandler = () => {
    if (isTyping === true) {
      isTypingMutation.mutate({ typing: false, chatId: id });
      setIsTyping(false);
    }
  };
  const onFocusHandler = () => {
    isTypingMutation.mutate({ typing: true, chatId: id });
  };

  const [otherUserTyping, setOtherUserTyping] = useState<boolean>(false);

  useEffect(() => {
    if (session) {
      const url = toPusherKey(`chat:${id}:${session.user.id}`);
      const typingChannel = pusherClient.subscribe(url);
      const typingHandler = (typing: boolean) => {
        setOtherUserTyping(typing);
      };
      typingChannel.bind("typing", typingHandler);
      return () => {
        pusherClient.unsubscribe(url);
        typingChannel.unbind("typing", typingHandler);
      };
    }
  }, [id, session]);

  if (profile.isLoading) return <div></div>;
  if (!profile.data || !session?.user.id) {
    router.replace("/404");
    return <div></div>;
  }
  if (messages.isLoading) return <div></div>;
  const onSendHandler = async () => {
    if (message.length !== 0) {
      const content = message;
      setMessage("");
      await sendMessage.mutateAsync({
        content,
        creatorId: id,
        chatId: messages.data?.id,
      });
    }
  };

  return (
    <div className="grid h-[95vh] w-full grid-rows-[56px_1fr_max-content]">
      <MessagesHeader
        description={messages.data?.groupName}
        image={messages.data?.photo}
        name={messages.data?.groupName}
        typing={otherUserTyping}
      />
      <div className="flex flex-col space-y-1 overflow-scroll p-2 justify-end">
        <ChatMessages
          messages={messages.data?.messages ? messages.data.messages : []}
        />
      </div>
      <div
        className="flex h-min m-2 items-center space-x-2 
        rounded-full border-[1px] border-seperator bg-transparent px-4 sm:relative"
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
          outerClass="!border-0 !my-3 flex"
          onEnterPress={onSendHandler}
        />
        <button
          className="left-icons flex space-x-2 text-xl"
          onClick={onSendHandler}
        >
          {message.length !== 0 && <MdSend />}
        </button>
      </div>
    </div>
  );
};

export default Messages;
