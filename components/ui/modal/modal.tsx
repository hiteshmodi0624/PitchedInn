import React, { FormEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
const Modal = ({
  children,
  className,
  backdropClassName,
  bgOnClickHandler,
}: {
  children: React.ReactNode;
  className?: string;
  backdropClassName?:string;
  bgOnClickHandler?: (event: FormEvent) => void;
}) => {
  const overlayRef = useRef<Element | null>(null);
  const backdropRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {

    const modals=document.getElementById("modals")!;
    const backdrop = document.createElement("div");
    modals.appendChild(backdrop)
    
    const overlay = document.createElement("div");
    backdrop.after(overlay)
    
    backdropRef.current = backdrop;
    overlayRef.current = overlay;

    setMounted(true);
  }, []);
  return (
    <>
      {mounted &&
        backdropRef.current &&
        ReactDOM.createPortal(
          <button
            className={`fixed left-0 top-0 z-[52] h-screen w-screen bg-grey bg-opacity-60 ${className}`}
            onClick={bgOnClickHandler}
          ></button>,
          backdropRef.current
        )}
      {mounted &&
        overlayRef.current &&
        ReactDOM.createPortal(
          <button
            className={`fixed z-[52] flex h-screen w-screen items-center justify-center overflow-auto ${className}`}
          >
            {children}
          </button>,
          overlayRef.current
        )}
    </>
  );
};
export default Modal;
