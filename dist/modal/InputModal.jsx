import { Modal } from "./modalcomponents/Modal";
import { ModalContentBox } from "./modalcomponents/ModalContentBox";
import { ModalContentButton } from "./modalcomponents/ModalContentButton";
import { ModalContentTitle } from "./modalcomponents/ModalTitle";
import "../css/InputModal.css";
const InputModal = ({ isOpen, title, placeholder, buttonText, onCloseClick, onKeyDown, onClick, value, onChange, }) => {
    return (<Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox header={<ModalContentTitle>{title}</ModalContentTitle>} content={<div className="modal-content">
            <input className="input" value={value} onChange={onChange} placeholder={placeholder}/>
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>} onCloseClick={onCloseClick}/>
    </Modal>);
};
export default InputModal;
