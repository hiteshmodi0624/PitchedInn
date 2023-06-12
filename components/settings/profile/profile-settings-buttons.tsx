import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";


const ProfileSettingsButtons = ({
  hide,
  submit
}: {
  hide:()=>void
  submit:()=>void
}) => {
  return (
    <>
      <button
        className="absolute left-4 top-4 z-[55] text-2xl text-white"
        onClick={hide}
      >
        <AiOutlineClose />
      </button>
      <button
        className="absolute right-4 top-4 z-[55] text-base text-primary2 hover:opacity-90"
        onClick={submit}
        type="submit"
      >
        Save
      </button>
    </>
  );
};
export default ProfileSettingsButtons