import "../css/LinkAddForm.css";
import AddLinkModal from "../modal/AddLinkModal";
import { MODALS_ID } from "../modal/modalcomponents/ModalId";
import { useState } from "react";
function LinkAddForm({ userFolder, folderId, setFolderId, folderName, }) {
    const [currentModal, setCurrentModal] = useState(null);
    const [selectedFolderId, setSelectedFolderId] = useState(parseInt(folderId));
    const closeModal = () => setCurrentModal(null);
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };
    const handleButtonClick = (event) => {
        setCurrentModal(MODALS_ID.addFolder);
    };
    return (<form>
      <input className="linkadd" type="search" placeholder="링크를 추가해 보세요"/>
      <button onClick={handleButtonClick} className="linkaddbtn" type="button">
        추가하기
      </button>

      <AddLinkModal isOpen={currentModal === MODALS_ID.addFolder} userFolder={userFolder} selectedLinkUrl={userFolder.data[0]?.url || ""} selectedFolderId={selectedFolderId} setSelectedFolderId={setSelectedFolderId} onAddClick={() => { }} onCloseClick={() => {
            setSelectedFolderId(null);
            closeModal();
        }} onKeyDown={handleKeyDown}/>
    </form>);
}
export default LinkAddForm;
