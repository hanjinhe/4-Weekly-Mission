import { Modal } from "./modalcomponents/Modal";
import { ModalContentBox } from "./modalcomponents/ModalContentBox";
import { ModalContentDescription } from "./modalcomponents/ModalContntDescription";
import { ModalContentTitle } from "./modalcomponents/ModalTitle";
import "../css/ShareModal.css";
import React, { KeyboardEventHandler, MouseEventHandler } from "react";
import kakao from "../image/kakao.png";
import facebook from "../image/facebook.png";
import link from "../image/link.png";

interface ShareModalProps {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: () => void;
  onFacebookClick: () => void;
  onLinkCopyClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
  onClick,
}: ShareModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
      disableScrollLock={false}
      hideBackdrop={false}
    >
      <ModalContentBox
        header={
          <div className="modal-header">
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className="sharemodal-content">
            <button className="sharebutton " onClick={onKakaoClick}>
              <div className="imgbox kakao">
                <img className="kakaoimg" src={kakao} alt="카카오 이미지" />
              </div>
              <span>카카오톡</span>
            </button>
            <button className="sharebutton" onClick={onFacebookClick}>
              <div className="imgbox facebook">
                <img
                  className="facebookimg"
                  src={facebook}
                  alt="페이스북 이미지"
                />
              </div>
              <span>페이스북</span>
            </button>
            <button className="sharebutton " onClick={onLinkCopyClick}>
              <div className="imgbox link">
                <img className="linkimg" src={link} alt="링크복사 이미지" />
              </div>
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

export default ShareModal;
