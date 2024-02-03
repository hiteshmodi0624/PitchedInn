"use client";
import AuthBottom from "components/auth/root/auth-bottom";
import BackButton from "components/shared/buttons/back-button";
import Modal from "components/ui/modal/modal";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

export default function AuthLayout({ children }: { children: React.ReactElement }) {
    const router=useRouter()
    const onCloseHandler = () => {
        router.replace("/auth");
    };
    return (
      <div className="relative my-auto bg-black p-5 h-dvh sm:h-auto">
        <BackButton/>
        {children}
      </div>
    );
}
