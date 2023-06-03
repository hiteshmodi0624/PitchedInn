import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import InteractionIcon from "components/shared/interaction-icon";
import { collectHandler, likeHandler, saveHandler } from "~/util/post";
import { Interactions } from "types/post";

const Interactions: FC<{ postId: string; interactions: Interactions }> = ({
  interactions,
  postId,
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
        count={interactions.likes.length + +liked}
        color="red"
      />
      <InteractionIcon
        icon1={<BiMessageRounded />}
        onClick={onComment}
        title="Message"
        count={interactions.comments.length}
        color="DodgerBlue"
      />
      <InteractionIcon
        icon1={<MdOutlineAddBox />}
        onClick={collectHandler.bind(null, postId, setCollected)}
        state={collected}
        icon2={<MdAddBox color="green" />}
        title="Collect"
        count={interactions.collects.length + +collected}
        color="green"
      />
      <InteractionIcon
        icon1={<BsBookmark />}
        onClick={saveHandler.bind(null, postId, setSaved)}
        state={saved}
        icon2={<BsBookmarkFill color="DodgerBlue" />}
        title="Save"
        count={interactions.saves.length + +saved}
        color="DodgerBlue"
      />
      <InteractionIcon
        icon1={<AiOutlineSend />}
        onClick={onForward}
        title="Forward"
        count={interactions.shares}
      />
    </div>
  );
};

export default Interactions;
