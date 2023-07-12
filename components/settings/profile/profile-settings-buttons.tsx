import BackButton from "components/shared/buttons/back-button";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";


const ProfileSettingsButtons = ({
  submit
}: {
  submit:()=>void
}) => {
  return (
    <>
      <div
        className="absolute left-2 top-2.5 z-[55] text-2xl text-white"
      >
        <BackButton/>
      </div>
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