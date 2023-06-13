import Modal from "components/ui/modal/modal";
import { FormEvent, useEffect, useState } from "react";
import CloseModal from "components/shared/close-modal/close-modal";
import ProfileSettingsForm from './settings-form';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from '~/utils/trpc';
export default function ProfileSettings({ hide }: { hide: () => void }) {
  const { data: session, status } = useSession();
  const [backdrop, setBackdrop] = useState(false);
  const router = useRouter();
  if (status === "loading") return <></>;
  if (status === "unauthenticated" || !session || !session.user.username) {
    router.replace("/404");
    return <></>;
  }
  const profileQuery = trpc.user.getUserInfo.useQuery({
    username: session.user.username,
  });
  if (!profileQuery.data) return <></>;
  const onCloseHandler = () => {
    setBackdrop(true);
  };
  const HideCloseHandler = () => {
    setBackdrop(false);
  };
  const discardHandler = () => {
    hide();
  };
  return (
    <>
      {backdrop && (
        <CloseModal
          cancelButton="Cancel"
          closeButton="Discard"
          heading="Discard?"
          text="If you leave, all changes will be lost."
          cancelHandler={HideCloseHandler}
          discardHandler={discardHandler}
        />
      )}
      <Modal className="overflow-hidden">
        <button
          className="absolute h-full w-full cursor-default"
          onClick={onCloseHandler}
        ></button>
        <div
          className={`relative mx-4 flex h-5/6 max-w-md cursor-default overflow-scroll rounded-xl 
          !bg-black text-center sm:max-w-xl
          ${backdrop ? "backdrop-blur-3xl" : "opacity-100"}`}
        >
          <ProfileSettingsForm profile={profileQuery.data} hide={hide}/>
        </div>
      </Modal>
    </>
  );
}
