import { MouseEventHandler, ReactNode } from "react";
import "../../css/ModalContentBox.css";
import close from "../../image/close.png";
interface ModalContentBoxProps {
  header: ReactNode;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLElement>;
}

export const ModalContentBox = ({
  header,
  content,
  onCloseClick,
}: ModalContentBoxProps) => {
  return (
    <div className="modalbox">
      <button onClick={onCloseClick}>
        <img className="closebutton" src={close} alt="X모양 닫기 버튼" />
      </button>
      <div className="items">
        {header}
        {content}
      </div>
    </div>
  );
};
