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
            <div className="max-w-[600px] bg-black rounded-xl my-auto relative p-5">
                <button className="absolute text-white text-xl" onClick={onCloseHandler}>
                    <AiOutlineClose />
                </button>
                {children}
            </div>
        </Modal>
    );
}
