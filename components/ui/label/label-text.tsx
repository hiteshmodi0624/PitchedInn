import { FC, useRef } from "react";
import useMenuDirection from "../../hooks/useMenuDirection";

const LabelText: FC<{ label: string; className?: string }> = ({
  label,
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuDirection = useMenuDirection(triggerRef);
  return (
    <div
      className={`absolute z-20 my-1 whitespace-pre-line rounded bg-gray2 p-2 
            py-1 text-xs text-white hidden sm:block ${menuDirection} ${className}`}
      ref={triggerRef}
    >
      {label}
    </div>
  );
};
export default LabelText;
