"use client";
import AuthBottom from "components/auth/root/auth-bottom";
import Modal from "components/ui/modal/modal";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

export default function AuthLayout({ children }: { children: React.ReactElement }) {
    const router=useRouter()
    const onCloseHandler = () => {
        router.replace("/auth");
    };
    return (
      <Modal>
        <button
          className="absolute h-full w-full cursor-default"
          onClick={onCloseHandler}
        ></button>
        <div className="relative my-auto max-w-[600px] rounded-xl bg-black p-5">
        <button
            className="absolute left-4 top-4 z-[55] text-2xl text-white"
            onClick={onCloseHandler}
          >
            <AiOutlineClose />
          </button>
          {children}
        </div>
      </Modal>
    );
}
