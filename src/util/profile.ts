import { MouseEvent } from "react";

export const blockHandler = (username: string) => {};

export const followHandler = (
  username: string,
  changeState: React.Dispatch<React.SetStateAction<boolean>>,
  event: MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  changeState((prev) => !prev);
};

export const reportHandler = (username: string) => {};

export const muteHandler = (username: string) => {};
