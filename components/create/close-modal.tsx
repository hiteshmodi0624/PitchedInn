import ContentLayout from "components/shared/content-layout/content-layout";
import Modal from "components/ui/modal/modal";

const CloseModal = ({
  cancelHandler,
  discardHandler,
}: {
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
            <h2 className="text-xl">Discard post? </h2>
            <p className="text-sm text-grey">
              If you leave, your edits won&apos;t be saved.
            </p>
          </div>
        }
        className={`relative mx-4 flex max-w-max cursor-default overflow-hidden rounded-xl text-center bg-black`}
      >
        <button
          className="border-b-[1px] border-seperator py-3 text-base text-red-500"
          onClick={discardHandler}
        >
          Discard{" "}
        </button>
        <button
          className="border-b-[1px] border-seperator py-3 text-base text-white"
          onClick={cancelHandler}
        >
          Cancel{" "}
        </button>
      </ContentLayout>
    </Modal>
  );
};
export default CloseModal