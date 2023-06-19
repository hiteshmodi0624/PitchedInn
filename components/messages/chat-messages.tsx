import { Message } from "@prisma/client";
import { relativeDay } from "~/utils/rel-day";
import { trpc } from "~/utils/trpc";
import ChatMessage from "./message";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useRef, useState } from "react";

const ChatMessages = ({ messages }: { messages: Message[] }) => {

  const [allMessages, setMessages] = useState(messages);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const scrollToBottomOfList = useCallback(() => {
    if (scrollTargetRef.current === null) {
      return;
    }
    scrollTargetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [scrollTargetRef]);
  
  useEffect(() => {
    scrollToBottomOfList();
  }, [scrollToBottomOfList,allMessages]);

  const { data: session } = useSession();
  const utils = trpc.useContext();
  trpc.user.chat.onAdd.useSubscription(undefined, {
    onData(post) {
      addMessages([post]);
    },
    onError(err) {
      utils.user.chat.findMessages.invalidate();
    },
  });
  const addMessages = useCallback((incoming?: Message[]) => {
    setMessages((current) => {
      const map: Record<Message["id"], Message> = {};
      for (const msg of current ?? []) {
        map[msg.id] = msg;
      }
      for (const msg of incoming ?? []) {
        map[msg.id] = msg;
      }
      return Object.values(map).sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      );
    });
  }, []);
  
  var currDate = new Date().toLocaleDateString();
  return (
    <>
      {allMessages.map((message) => {
        const msg = (
          <div key={message.id}>
            {currDate !== message.createdAt.toLocaleDateString() && (
              <div className="flex justify-center text-sm text-grey">
                {relativeDay(message.createdAt)}
              </div>
            )}
            <ChatMessage
              message={message.content}
              sender={
                message.creatorId === session!.user.id
                  ? "self"
                  : message.creatorId
              }
              time={message.createdAt.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          </div>
        );
        currDate = message.createdAt.toLocaleDateString();
        return msg;
      })}
      <div ref={scrollTargetRef}></div>
    </>
  );
};
export default ChatMessages;
