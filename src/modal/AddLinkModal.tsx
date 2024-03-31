import { Modal } from "./modalcomponents/Modal";
import { ModalContentBox } from "./modalcomponents/ModalContentBox";
import { ModalContentDescription } from "./modalcomponents/ModalContntDescription";
import { ModalContentTitle } from "./modalcomponents/ModalTitle";
import { ModalContentButton } from "./modalcomponents/ModalContentButton";
import { FolderItem } from "./modalcomponents/FolderItem";
import "../css/AddLinkModal.css";
import {
  KeyboardEventHandler,
  MouseEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

interface AddLinkModalProps {
  isOpen: boolean;
  userFolder: {
    data: {
      id: number;
      name: string;
      url?: string;
      link?: { count: number };
    }[];
  };
  selectedLinkUrl: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: MouseEventHandler<HTMLElement>;
  onCloseClick: MouseEventHandler<HTMLElement>;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
}

const AddLinkModal = ({
  isOpen,
  userFolder,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className="modal-header">
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className="modal-content">
            <div className="folder-list">
              {userFolder.data.map(({ id, name, link }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

export default AddLinkModal;
