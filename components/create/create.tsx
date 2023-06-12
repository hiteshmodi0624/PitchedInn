import ContentLayout from "components/shared/content-layout/content-layout";
import Modal from "components/ui/modal/modal";
import { useState } from "react";
import CloseModal from "components/shared/close-modal/close-modal";
import CreateContent from "./create-content";

export default function Create({ hide }: { hide: () => void }) {
  const [top, setTop] = useState<undefined | number>();
  const [left, setLeft] = useState<undefined | number>();

  const [dragState, setDragState] = useState("end");
  const [createState, setCreateState] = useState<
    "selection" | "crop" | "final"
  >("selection");
  const [backdrop, setBackdrop] = useState(false);
  const [discardMode, setDiscardMode] = useState<"close" | "back">("close");

  const DragStateHandler = (state: string) => {
    setDragState(state);
  };
  const setBackDropHandler= (val:boolean) => {
    setBackdrop(val);
  }
  const setTopHandler = (val: number | undefined) => {
    setTop(val);
  };
  const setLeftHandler = (val: number | undefined) => {
    setLeft(val);
  };
  const CreateStateHandler = (state: string) => {
    if (state === "selection" || state === "crop" || state === "final")
      setCreateState(state);
  };
  const setDiscardModeHandler = (mode: "close" | "back") => {
    setDiscardMode(mode);
  };
  const onCloseHandler = () => {
    if (createState === "selection") {
      hide();
    } else {
      setBackdrop(true);
      setDiscardMode("close");
    }
  };
  const HideCloseHandler = () => {
    setBackdrop(false);
  };
  const discardHandler = () => {
    if (discardMode === "close") {
      hide();
    } else {
      setDragState("end");
      setCreateState("selection");
      setBackdrop(false);
      setTop(undefined);
      setLeft(undefined);
    }
  };
  return (
    <>
      {backdrop && (
        <CloseModal
          cancelButton="Cancel"
          closeButton="Discard"
          heading="Discard post?"
          text="If you leave, your edits won&apos;t be saved."
          cancelHandler={HideCloseHandler}
          discardHandler={discardHandler}
        />
      )}
      <Modal className="overflow-hidden">
        <button
          className="absolute h-full w-full cursor-default"
          onClick={onCloseHandler}
        ></button>
        <ContentLayout
          page={
            createState === "selection"
              ? `Create new post`
              : createState === "crop"
              ? `Crop`
              : "Upload Post"
          }
          className={`relative mx-4 flex max-w-sm cursor-default overflow-hidden rounded-xl text-center sm:max-w-lg ${
            dragState === "end" ? "!bg-gray2" : "!bg-black"
          } ${backdrop ? "backdrop-blur-3xl" : "opacity-100"}`}
        >
          <CreateContent
            CreateStateHandler={CreateStateHandler}
            DragStateHandler={DragStateHandler}
            createState={createState}
            dragState={dragState}
            hide={hide}
            left={left}
            onCloseHandler={onCloseHandler}
            setBackdrop={setBackDropHandler}
            setDiscardMode={setDiscardModeHandler}
            setLeft={setLeftHandler}
            setTop={setTopHandler}
            top={top}
          />
        </ContentLayout>
      </Modal>
    </>
  );
}
