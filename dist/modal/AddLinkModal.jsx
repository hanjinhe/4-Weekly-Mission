import { Modal } from "./modalcomponents/Modal";
import { ModalContentBox } from "./modalcomponents/ModalContentBox";
import { ModalContentDescription } from "./modalcomponents/ModalContntDescription";
import { ModalContentTitle } from "./modalcomponents/ModalTitle";
import { ModalContentButton } from "./modalcomponents/ModalContentButton";
import { FolderItem } from "./modalcomponents/FolderItem";
import "../css/AddLinkModal.css";
const AddLinkModal = ({ isOpen, userFolder, selectedLinkUrl, selectedFolderId, setSelectedFolderId, onAddClick, onCloseClick, onKeyDown, }) => {
    return (<Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox header={<div className="modal-header">
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>} content={<div className="modal-content">
            <div className="folder-list">
              {userFolder.data.map(({ id, name, link }) => (<FolderItem key={id} isSelected={id === selectedFolderId} folderName={name} linkCount={link?.count} onClick={() => setSelectedFolderId(id)}/>))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>} onCloseClick={onCloseClick}/>
    </Modal>);
};
export default AddLinkModal;
