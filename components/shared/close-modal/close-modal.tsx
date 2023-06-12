import ContentLayout from "components/shared/content-layout/content-layout";
import Modal from "components/ui/modal/modal";

const CloseModal = ({
  heading,
  text,
  closeButton,
  cancelButton,
  cancelHandler,
  discardHandler,
}: {
  heading: string;
  closeButton: string;
  cancelButton: string;
  text: string;
  cancelHandler: () => void;
  discardHandler: () => void;
}) => {
  return (
    <Modal className="!z-[60] overflow-hidden" backdropClassName="!z-[65]">
      <button
        className="absolute h-full w-full cursor-default"
        onClick={cancelHandler}
      ></button>
      <ContentLayout
        headerContent={
          <div className="space-y-1 px-16 py-6">
            <h2 className="text-xl">{heading}</h2>
            <p className="text-sm text-grey">{text}</p>
          </div>
        }
        className={`relative mx-4 flex max-w-max cursor-default overflow-hidden rounded-xl bg-black text-center`}
      >
        <button
          className="border-b-[1px] border-seperator py-3 text-base text-red-500"
          onClick={discardHandler}
        >
          {closeButton}{" "}
        </button>
        <button
          className="border-b-[1px] border-seperator py-3 text-base text-white"
          onClick={cancelHandler}
        >
          {cancelButton}{" "}
        </button>
      </ContentLayout>
    </Modal>
  );
};
export default CloseModal