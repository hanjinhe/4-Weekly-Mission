import { MouseEventHandler, ReactNode } from "react";
import "../../css/ModalContentButton.css";

interface ModalContentButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  themeColor?: "blue" | "red";
}

export const ModalContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: ModalContentButtonProps) => {
  return (
    <button className={`Modalbutton ${themeColor}`} onClick={onClick}>
      {children}
    </button>
  );
};
