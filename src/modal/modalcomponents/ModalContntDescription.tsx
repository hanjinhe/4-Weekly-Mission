import { ReactNode } from "react";
import "../../css/ModalContentDescription.css";

interface ModalContentDescriptionProps {
  children: ReactNode;
}

export const ModalContentDescription = ({
  children,
}: ModalContentDescriptionProps) => {
  return <p className="modaldescription">{children}</p>;
};
