import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProfilePicture from "components/shared/account/profile-picture";
import { Chat, Message, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { relativeTime } from "~/utils/rel-time";

const MessageProfiles: FC<{
  chat: Chat & {
    messages: Message[];
  };
}> = ({ chat }) => {
  const { data: session } = useSession();
  useEffect(() => {
    const main = document.getElementById("feed");
    const messages = document.getElementById("messages")!;
    if (main) {
      const width = main.getBoundingClientRect().width;
      messages.style.width = `${width}px`;
    }
  }, []);
  const message =
    "Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn Hello There, I am new to PitchedInn";
  return (
    <Link
      className="flex items-center justify-center"
      href={`messages/${
        chat.type === "SINGLE"
          ? chat.userIds[0] === session?.user.id
            ? chat.userIds[1]
            : chat.userIds[0]
          : chat.id
      }`}
    >
      <ProfilePicture className="h-12 w-12" profilePic={chat.photo} />
      <div
        className="m-2 flex w-full flex-col overflow-hidden truncate overflow-ellipsis"
        id="messages"
      >
        <div className="flex h-5 overflow-hidden text-grey">
          <h2 className="text-sm font-bold text-white">{chat.groupName}</h2>
          <h2 className="text-sm">
            <span className="mx-2">·</span>
            {chat.messages[0]?.createdAt
              ? relativeTime(chat.messages[0]?.createdAt)
              : "Start A new Chat now!"}
          </h2>
        </div>
        <p className="truncate overflow-ellipsis text-xs text-grey">
          {chat.messages[0]?.content??<p className="text-white text-sm">Start a new conversation now!</p>}
        </p>
      </div>
    </Link>
  );
};

export default MessageProfiles;
