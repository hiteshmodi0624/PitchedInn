import { FC, useState } from "react";

const MenuToggler: FC<{
  className?: string;
  button: JSX.Element;
  menu: JSX.Element;
}> = ({ button, menu, className }) => {
  const [state, changeState] = useState(false);

  const hide = () => {
    changeState(false);
  };
  const show = () => {
    changeState(true);
  };
  const onClickHandler = () => {
    changeState((prev) => !prev);
  };
  return (
    <div
      className={`group relative cursor-pointer ${className}`}
      onFocusCapture={hide}
      onClick={onClickHandler}
    >
      {button}
      <div className="hidden group-focus-within:block" onFocusCapture={show}>
        {state && menu}
      </div>
    </div>
  );
};
export default MenuToggler;
