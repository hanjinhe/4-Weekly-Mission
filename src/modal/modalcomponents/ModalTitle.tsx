import { ReactNode } from "react";
import "../../css/ModalTitle.css";

interface ModalTitleProps {
  children: ReactNode;
}

export const ModalContentTitle = ({ children }: ModalTitleProps) => {
  return <h2 className="title">{children}</h2>;
};
