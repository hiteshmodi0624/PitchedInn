"use client"
import Input from "@/components/auth/input";
import BackButton from "@/components/shared/buttons/back-button";
import ContentLayout from "@/components/shared/content-layout/content-layout";
import ProfilePicture from "@/components/shared/profile-picture";
import { getProfileData } from "@/services/profile";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile, MdGif, MdGifBox, MdPhoto, MdPictureAsPdf, MdPictureInPicture, MdSend } from "react-icons/md";
import Message from "./components/message";
import MessagesHeader from "./components/messages-header";

export default function Messages({ params }: { params: { username: string } }) {
    const profile = getProfileData(params.username);
    const [message,setMessage]=useState("");
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setMessage(event.target.value)
    }
    return (
        <ContentLayout headerContent={<MessagesHeader profile={profile}/>} className="h-screen">
            <div className="border-seperator border-[1px] w-full my-6 flex-col flex overflow-scroll h-full">
                <div className=" border-seperator flex flex-col justify-end border-[1px] h-full  bg-black px-2 w-full">
                    <div className="w-full space-y-1 py-2 overflow-scroll flex flex-col">
                        <Message message="Hello" sender="self" time="15 May, 2023, 10:05 AM"/>
                        <Message message="Hi there" sender="other" time="15 May, 2023, 10:05 AM"/>
                        <Message message="Hello" sender="self" time="15 May, 2023, 10:05 AM"/>
                        <Message message="Hello" sender="self" time="15 May, 2023, 10:05 AM"/>
                        <Message message="Hello" sender="self" time="15 May, 2023, 10:05 AM"/>
                    </div>
                    <div className="flex items-center space-x-2 w-full bg-transparent px-4
                     rounded-full border-seperator border-[1px] h-min my-2">
                        <div className="left-icons flex text-xl space-x-1">
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
                            className="bg-transparent border-0 py-1 placeholder:!text-grey"
                        />
                        <div className="left-icons flex text-xl space-x-2">
                            <MdSend/>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
