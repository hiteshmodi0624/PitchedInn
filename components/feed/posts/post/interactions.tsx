import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import InteractionIcon from "components/shared/interaction-icon";
import { collectHandler, likeHandler, saveHandler } from "~/util/post";
import { Collect, Comment, Like, Save } from "@prisma/client";
const Interactions = ({
  likes,
  comments,
  collects,
  shares,
  saves,
  postId,
}: {
  likes: Like[];
  comments: Comment[];
  collects: Collect[];
  shares: number;
  saves: Save[];
  postId: string;
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [collected, setCollected] = useState<boolean>(false);
  const onComment = () => {};
  const onForward = () => {};
  return (
    <div className="flex w-full justify-between text-2xl">
      <InteractionIcon
        icon1={<AiOutlineHeart />}
        onClick={likeHandler.bind(null, postId, setLiked)}
        state={liked}
        icon2={<AiFillHeart color="red" />}
        title="Like"
        count={likes.length + +liked}
        color="red"
      />
      <InteractionIcon
        icon1={<BiMessageRounded />}
        onClick={onComment}
        title="Message"
        count={comments.length}
        color="DodgerBlue"
      />
      <InteractionIcon
        icon1={<MdOutlineAddBox />}
        onClick={collectHandler.bind(null, postId, setCollected)}
        state={collected}
        icon2={<MdAddBox color="green" />}
        title="Collect"
        count={collects.length + +collected}
        color="green"
      />
      <InteractionIcon
        icon1={<BsBookmark />}
        onClick={saveHandler.bind(null, postId, setSaved)}
        state={saved}
        icon2={<BsBookmarkFill color="DodgerBlue" />}
        title="Save"
        count={saves.length + +saved}
        color="DodgerBlue"
      />
      <InteractionIcon
        icon1={<AiOutlineSend />}
        onClick={onForward}
        title="Forward"
        count={shares}
      />
    </div>
  );
};

export default Interactions;
