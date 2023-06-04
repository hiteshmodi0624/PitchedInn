import Input from "components/auth/input";
import ContentLayout from "components/shared/content-layout/content-layout";
import { ChangeEvent, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile, MdGifBox, MdPhoto, MdSend } from "react-icons/md";
import Message from "components/messages/message";
import SmallProfileHeader from "components/shared/profile-header/small-profile-header";
import { useRouter } from "next/router";
import { User } from "@prisma/client";

export default function Messages({}) {
  const router = useRouter();
  const profile:User|undefined = undefined;
  const [message, setMessage] = useState("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  if (!profile) {
    router.replace("/404");
    return <div></div>;
  }
  return (
    <ContentLayout
      headerContent={<SmallProfileHeader profile={profile} />}
      className="h-screen"
    >
      <div className="my-6 flex h-full w-full flex-col overflow-scroll border-[1px] border-seperator">
        <div className=" flex h-full w-full flex-col justify-end border-[1px]  border-seperator bg-black px-2">
          <div className="flex w-full flex-col space-y-1 overflow-scroll py-2">
            <Message
              message="Hello"
              sender="self"
              time="15 May, 2023, 10:05 AM"
            />
            <Message
              message="Hi there"
              sender="other"
              time="15 May, 2023, 10:05 AM"
            />
            <Message
              message="Hello"
              sender="self"
              time="15 May, 2023, 10:05 AM"
            />
            <Message
              message="Hello"
              sender="self"
              time="15 May, 2023, 10:05 AM"
            />
            <Message
              message="Hello"
              sender="self"
              time="15 May, 2023, 10:05 AM"
            />
          </div>
          <div
            className="my-2 flex h-min w-full items-center space-x-2
                     rounded-full border-[1px] border-seperator bg-transparent px-4"
          >
            <div className="left-icons flex space-x-1 text-xl">
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
            />
            <div className="left-icons flex space-x-2 text-xl">
              <MdSend />
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
