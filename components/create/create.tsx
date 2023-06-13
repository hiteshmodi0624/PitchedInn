import ContentLayout from "components/shared/content-layout/content-layout";
import Modal from "components/ui/modal/modal";
import { useState } from "react";
import CloseModal from "components/shared/close-modal/close-modal";
import CreateContent from "./create-content";

export default function Create({ hide }: { hide: () => void }) {
  const [dragState, setDragState] = useState("end");
  const [createState, setCreateState] = useState<
    "selection" | "preview" | "final"
  >("selection");
  const [backdrop, setBackdrop] = useState(false);
  const [discardMode, setDiscardMode] = useState<"close" | "back">("close");
  const [files, setFile] = useState<File[]>([]);

  const DragStateHandler = (state: string) => {
    setDragState(state);
  };
  const setBackDropHandler = (val: boolean) => {
    setBackdrop(val);
  };
  const CreateStateHandler = (state: string) => {
    if (state === "selection" || state === "preview" || state === "final")
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
      setFile([]);
    }
  };
  const setFiles = (fl: File, remove?: boolean) => {
    if (remove) {
      setFile((prev) => prev.filter((f) => f !== fl));
    } else {
      setFile((prev) => [...new Set([...prev, fl])]);
    }
  };
  return (
    <>
      {backdrop && (
        <CloseModal
          cancelButton="Cancel"
          closeButton="Discard"
          heading="Discard post?"
          text="If you leave, your edits won't be saved."
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
              : createState === "preview"
              ? `Preview`
              : "Upload Post"
          }
          className={`relative mx-4 h-[42rem] max-w-sm cursor-default overflow-hidden rounded-xl text-center sm:max-w-lg ${
            dragState === "end" ? "!bg-gray2" : "!bg-black"
          } ${backdrop ? "backdrop-blur-3xl" : "opacity-100"}`}
          cardClassName="items-self-start"
        >
          <CreateContent
            CreateStateHandler={CreateStateHandler}
            DragStateHandler={DragStateHandler}
            createState={createState}
            hide={hide}
            dragState={dragState}
            onCloseHandler={onCloseHandler}
            setBackdrop={setBackDropHandler}
            setDiscardMode={setDiscardModeHandler}
            files={files}
            setFiles={setFiles}
          />
        </ContentLayout>
      </Modal>
    </>
  );
}
