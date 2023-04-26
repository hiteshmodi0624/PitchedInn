import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import InteractionIcon from "../../ui/interaction-icon";
import { interactions } from "../../../../modals/post";

const Interactions:FC<{interactions:interactions}>=({interactions}) =>{
    const [liked, setLiked] = useState<boolean>(false);
    const [saved, setSaved] = useState<boolean>(false);
    const [collected, onCollected] = useState<boolean>(false);
    const onLikeClick = () => {
        setLiked((prev) => !prev);
    };
    const onComment = () => {};
    const onForward = () => {};
    const onCollect = () => {
        onCollected((prev) => !prev);
    };
    const onSave = () => {
        setSaved((prev) => !prev);
    };
    return (
        <div className="text-2xl flex justify-between w-full">
            <InteractionIcon
                icon1={<AiOutlineHeart />}
                onClick={onLikeClick}
                state={liked}
                icon2={<AiFillHeart color="red" />}
                title="Like"
                count={interactions.likes+ (+liked)}
                color="red"
            />
            <InteractionIcon
                icon1={<BiMessageRounded />}
                onClick={onComment}
                title="Message"
                count={interactions.comments}
                color="DodgerBlue"
            />
            <InteractionIcon
                icon1={<MdOutlineAddBox />}
                onClick={onCollect}
                state={collected}
                icon2={<MdAddBox color="green"/>}
                title="Collect"
                count={interactions.collected+ (+collected)}
                color="green"
            />
            <InteractionIcon
                icon1={<BsBookmark />}
                onClick={onSave}
                state={saved}
                icon2={<BsBookmarkFill color="DodgerBlue"/>}
                title="Save"
                count={interactions.saved+ (+saved)}
                color="DodgerBlue"
            />
            <InteractionIcon
                icon1={<AiOutlineSend />}
                onClick={onForward}
                title="Forward"
                count={interactions.shared}
            />
        </div>
    );
}

export default Interactions;
