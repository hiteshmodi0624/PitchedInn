import { Message } from "@prisma/client";
import { relativeDay } from "../../src/utils/rel-day";
import { trpc } from "../../src/utils/trpc";
import ChatMessage from "./message";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { pusherClient } from "../../src/server/pusher";
import { toPusherKey } from "../../src/utils/pusher";
import { useRouter } from "next/router";

const ChatMessages = ({ messages }: { messages: Message[] }) => {
  const [allMessages, setMessages] = useState(messages);
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const otherUserId = router.query.userid as string;
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
  }, [scrollToBottomOfList, allMessages]);

  const { data: session } = useSession();
  const utils = trpc.useContext();

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
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    });
  }, []);

  useEffect(() => {
    const messageHandler = (message: Message) => {
      addMessages([message]);
    };
    const Channel1 = pusherClient.subscribe(
      toPusherKey(`chat:${session?.user.id}`)
    );
    const Channel2 = pusherClient.subscribe(toPusherKey(`chat:${otherUserId}`));

    Channel1.bind("incoming-message", messageHandler);
    Channel2.bind("incoming-message", messageHandler);

    return () => {
      pusherClient.unsubscribe(toPusherKey(`chat:${session?.user.id}`));
      pusherClient.unsubscribe(toPusherKey(`chat:${otherUserId}`));
      Channel1.unbind("incoming-message", messageHandler);
      Channel2.unbind("incoming-message", messageHandler);
    };
  }, [session, addMessages, otherUserId]);

  var currDate = new Date().toLocaleDateString();
  return (
    <>
      {allMessages.map((message) => {
        const messageDate = new Date(message.createdAt);
        const msg = (
          <div key={message.id}>
            {currDate !== messageDate.toLocaleDateString() && (
              <div className="flex justify-center text-sm text-grey">
                {relativeDay(messageDate)}
              </div>
            )}
            <ChatMessage
              message={message.content}
              sender={
                message.creatorId === session!.user.id
                  ? "self"
                  : message.creatorId
              }
              time={messageDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            />
          </div>
        );
        currDate = messageDate.toLocaleDateString();
        return msg;
      })}
      <div ref={scrollTargetRef}></div>
    </>
  );
};
export default ChatMessages;
