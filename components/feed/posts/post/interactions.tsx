import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import InteractionIcon from "components/shared/interaction-icon";
import { collectHandler, saveHandler } from "~/util/post";
import { Collect, Comment, Like, Save } from "@prisma/client";
import { trpc } from "~/utils/trpc";
import { useSession } from "next-auth/react";
const Interactions = ({
  likes,
  comments,
  shares,
  saves,
  postId,
}: {
  likes: Like[];
  comments: Comment[];
  shares: number;
  saves: Save[];
  postId: string;
}) => {
  const {data:session}=useSession();
  const id=session?.user.id;
  var isLiked=likes.find(like=>like.userId===id)!==undefined;
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [saved, setSaved] = useState<boolean>(false);
  const onComment = () => {};
  const onForward = () => {};
  const likeQuery=trpc.post.interaction.likePost.useMutation();
  const likeHandler=async()=>{
    likeQuery.mutate({ postId: postId });
    setLiked(prev=>!prev)
  }
  return (
    <div className="flex w-full justify-between text-2xl">
      <InteractionIcon
        icon1={<AiOutlineHeart />}
        onClick={likeHandler}
        state={liked}
        icon2={<AiFillHeart color="red" />}
        title="Like"
        count={likes.length+(+liked)-(+isLiked)}
        color="red"
      />
      <InteractionIcon
        icon1={<BiMessageRounded />}
        onClick={onComment}
        title="Comment"
        count={comments.length}
        color="DodgerBlue"
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
