import { useSession } from "next-auth/react";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";


const CreateButtons = ({
  createState,
  onCloseHandler,
  setCreateState,
  setBackdrop,
  setDiscardMode,
  onSubmitHandler,
}: {
  createState: string;
  onCloseHandler: () => void;
  setCreateState: (state: string) => void;
  setBackdrop: (val: boolean) => void;
  setDiscardMode: (mode: "close" | "back") => void;
  onSubmitHandler: () => void;
}) => {
  const leftButtonClickHandler = () => {
    if (createState === "selection") {
      onCloseHandler();
    } else if (createState === "crop") {
      setBackdrop(true);
      setDiscardMode("back");
    } else {
      setCreateState("crop");
    }
  };
  const rightButtonClickHandler = () => {
    if (createState === "crop") {
      setCreateState("final");
    } else {
      onSubmitHandler();
    }
  };
  return (
    <>
      <button
        className="absolute left-4 top-4 z-[55] text-2xl text-white"
        onClick={leftButtonClickHandler}
      >
        {createState === "selection" ? (
          <AiOutlineClose />
        ) : (
          <AiOutlineArrowLeft />
        )}
      </button>
      {createState !== "selection" && (
        <button
          className="absolute right-4 top-4 z-[55] text-base text-primary2 hover:opacity-90"
          onClick={rightButtonClickHandler}
          type="submit"
        >
          {createState === "crop" ? "Next" : "Share"}
        </button>
      )}
    </>
  );
};
export default CreateButtons