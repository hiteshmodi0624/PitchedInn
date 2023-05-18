import AuthButton from "components/shared/buttons/auth-button";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
export default function AuthBottom() {
    const overlayRef = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        overlayRef.current = document.getElementById("root-overlay");
        setMounted(true);
    }, []);
    return (
        <>
            {mounted &&
                overlayRef.current &&
                ReactDOM.createPortal(
                    <div className="fixed bottom-0 z-[60] flex w-screen flex-wrap justify-evenly bg-primary2 py-3">
                        <div className="my-auto hidden sm:block">
                            <h1 className="text-white">
                                <span className=" text-2xl font-bold">
                                    Don&apos;t miss the next greatest Business
                                    Pitch
                                </span>
                                <br />
                                PitchedInn users know about every new amazing
                                Businesses.
                            </h1>
                        </div>
                        <div className="flex w-full sm:w-2/5">
                            <AuthButton
                                name="Log in"
                                link="auth/login"
                                className="w-full"
                                buttonClasses="!bg-transparent hover:bg-transparent text-white border-white border-[1px] "
                            />
                            <AuthButton
                                name="Sign up"
                                link="auth/signup"
                                className="w-full"
                            />
                        </div>
                    </div>,
                    overlayRef.current
                )}
        </>
    );
}
