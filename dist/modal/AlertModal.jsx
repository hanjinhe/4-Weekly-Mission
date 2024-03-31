import { Modal } from "./modalcomponents/Modal";
import { ModalContentBox } from "./modalcomponents/ModalContentBox";
import { ModalContentDescription } from "./modalcomponents/ModalContntDescription";
import { ModalContentTitle } from "./modalcomponents/ModalTitle";
import { ModalContentButton } from "./modalcomponents/ModalContentButton";
import "../css/AlertModal.css";
const AlertModal = ({ isOpen, title, description, buttonText, onClick, onCloseClick, onKeyDown, }) => {
    return (<Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox header={<div className="modal-header">
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>} content={<ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>} onCloseClick={onCloseClick}/>
    </Modal>);
};
export default AlertModal;
