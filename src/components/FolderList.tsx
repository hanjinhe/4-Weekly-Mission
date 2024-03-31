import { useState } from "react";
import React from "react";
import "../css/FolderList.css";
import InputModal from "../modal/InputModal";
import { MODALS_ID, BUTTONS } from "../modal/modalcomponents/ModalId";
import AlertModal from "../modal/AlertModal";
import ShareModal from "../modal/ShareModal";
import CopyToClipboard from "./CopyToClipboard";
import whiteadd from "../image/wihteadd.png";
import add from "../image/add.png";
interface UserFolderData {
  id: string;
  name: string;
}

interface UserFolder {
  data: UserFolderData[];
}

interface FolderListProps {
  userFolder: UserFolder;
  folderId: string;
  folderName: string;
  onClick: (folderName: string, folderId: string) => void;
  tools: any;
}
function FolderList({
  userFolder,
  folderId,
  folderName,
  onClick,
}: FolderListProps) {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const shareLink = `${window.location.origin}/shared?user=1&folder=${folderId}`;

  const handleKakaoClick = () => {
    window.open(
      `https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Fsetting#login`
    );
  };
  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  const handleLinkCopyClick = () => CopyToClipboard({ text: shareLink });

  const handleItemClick = (folderName: string, folderId: string) => () => {
    onClick(folderName, folderId);
  };

  return (
    <>
      {userFolder.data.length > 0 ? (
        <section>
          <div className="foldercategory">
            <ul className="folderlist">
              <li
                className={
                  folderName === "전체"
                    ? "folderbasicitem selected"
                    : "folderbasicitem"
                }
                onClick={handleItemClick("전체", "")}
              >
                전체
              </li>
              {userFolder.data.map((folder) => (
                <li
                  className={
                    folderName === folder.name
                      ? "folderitem selected"
                      : "folderitem"
                  }
                  key={folder.id}
                  onClick={handleItemClick(folder.name, folder.id)}
                >
                  {folder.name}
                </li>
              ))}
              <button
                className="folderadd"
                onClick={() => setCurrentModal(MODALS_ID.addFolder)}
              >
                <p>폴더 추가</p>
                <img className="addbtn" src={add} alt="폴더추가" />
              </button>
              <InputModal
                isOpen={currentModal === MODALS_ID.addFolder}
                title="폴더 추가"
                placeholder="내용 입력"
                buttonText="추가하기"
                onCloseClick={closeModal}
                onKeyDown={handleKeyDown}
              />
            </ul>
          </div>
          <div className="title-tools">
            <h1 className="usertitle">{folderName}</h1>
            {folderName !== "전체" && (
              <div className="tools">
                {BUTTONS.map((button) => (
                  <button
                    className="tool"
                    key={button.text}
                    onClick={() => setCurrentModal(button.modalId)}
                  >
                    <span>{button.text}</span>
                    <img src={button.iconSource} alt={button.text} />
                  </button>
                ))}
                <ShareModal
                  isOpen={currentModal === MODALS_ID.share}
                  folderName={folderName}
                  onKakaoClick={handleKakaoClick}
                  onFacebookClick={handleFacebookClick}
                  onLinkCopyClick={handleLinkCopyClick}
                  onCloseClick={closeModal}
                  onKeyDown={handleKeyDown}
                />
                <InputModal
                  isOpen={currentModal === MODALS_ID.rename}
                  title="폴더 이름 변경"
                  placeholder="내용 입력"
                  buttonText="변경하기"
                  onCloseClick={closeModal}
                  onKeyDown={handleKeyDown}
                />
                <AlertModal
                  isOpen={currentModal === MODALS_ID.delete}
                  title="폴더 삭제"
                  description={folderName}
                  buttonText="삭제하기"
                  onCloseClick={closeModal}
                  onKeyDown={handleKeyDown}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => setCurrentModal(MODALS_ID.addFolder)}
            className="floatingactionbtn"
          >
            <p>폴더 추가</p>
            <img
              className="floatingactionbtn-img"
              src={whiteadd}
              alt="폴더추가"
            />
          </button>
          <InputModal
            isOpen={currentModal === MODALS_ID.addFolder}
            title="폴더 추가"
            placeholder="내용 입력"
            buttonText="추가하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
        </section>
      ) : (
        <p className="no-links">저장된 링크가 없습니다.</p>
      )}
    </>
  );
}

export default FolderList;
