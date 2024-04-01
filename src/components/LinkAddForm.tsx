import "../css/LinkAddForm.css";
import AddLinkModal from "../modal/AddLinkModal";
import { MODALS_ID } from "../modal/modalcomponents/ModalId";
import { Dispatch, SetStateAction, useState } from "react";

interface FolderData {
  id: number;
  name: string;
  url: string;
}

interface LinkAddFormProps {
  userFolder: { data: FolderData[] };
  folderId: string;
  setFolderId: Dispatch<SetStateAction<string>>;
  folderName: string;
}

function LinkAddForm({
  userFolder,
  folderId,
  setFolderId,
  folderName,
}: LinkAddFormProps) {
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(
    parseInt(folderId)
  );

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const handleButtonClick = (event: React.MouseEvent) => {
    setCurrentModal(MODALS_ID.addFolder);
  };

  return (
    <form className="linkaddform">
      <input
        className="linkadd"
        type="search"
        placeholder="링크를 추가해 보세요"
      />
      <button onClick={handleButtonClick} className="linkaddbtn" type="button">
        추가하기
      </button>

      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addFolder}
        userFolder={userFolder}
        selectedLinkUrl={userFolder.data[0]?.url || ""}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
export default LinkAddForm;
