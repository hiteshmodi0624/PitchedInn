import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
const Modal = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const overlayRef = useRef<Element | null>(null);
    const backdropRef = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        overlayRef.current = document.getElementById("root-overlay");
        backdropRef.current = document.getElementById("root-backdrop");
        setMounted(true);
    }, []);
    return (
        <>
            {mounted &&
                backdropRef.current &&
                ReactDOM.createPortal(
                    <div className="fixed top-0 left-0 w-screen h-screen bg-grey bg-opacity-60 z-[90]"></div>,
                    backdropRef.current
                )}
            {mounted &&
                overlayRef.current &&
                ReactDOM.createPortal(
                    <div
                        className={`fixed w-full h-full z-[100] overflow-scroll flex justify-center items-center ${className}`}
                    >
                        {children}
                    </div>,
                    overlayRef.current
                )}
        </>
    );
};
export default Modal;
