import { formatTime } from "./FormattTime";
import "../css/Card.css";
import { useRef, useEffect, useState } from "react";
import { MODALS_ID } from "../modal/modalcomponents/ModalId";
import AlertModal from "../modal/AlertModal";
import AddLinkModal from "../modal/AddLinkModal";
import kebob from "../image/kebab.png";
import starImage from "../image/star.png";
function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
export function Card({ item, folderId, fodername, userFolder }) {
    const [kebabPopUp, setKebabPopUp] = useState(false);
    const [currentModal, setCurrentModal] = useState(null);
    const [selectedFolderId, setSelectedFolderId] = useState(parseInt(folderId));
    const kebabRef = useRef(null);
    const closeModal = () => setCurrentModal(null);
    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (kebabRef.current &&
                !kebabRef.current.contains(event.target)) {
                setKebabPopUp(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
    }, []);
    const handlePopup = () => {
        setKebabPopUp(!kebabPopUp);
    };
    return (<>
      {window.location.pathname === "/shared" ? (<div className="cardItem">
          <a href={item.url} target="_self">
            <div className="info-img">
              <img className="cardItem-img" src={item.imageSource || "../image/snsmainimg.png"} alt={item.title}></img>
            </div>
          </a>
          <div className="info">
            <p className="formatTime">{formatTime(item.createdAt)}</p>
            <p className="description">{item.description}</p>
            <p className="formatDate">{formatDate(item.createdAt)}</p>
          </div>
        </div>) : (<div className="cardItem">
          <a href={item.url} target="_self">
            <div className="info-img">
              <img className="star-img" src={starImage} alt="별모양 버튼"/>
              <img className="cardItem-img" src={item.image_source || "../image/snsmainimg.png"} alt={item.title}></img>
            </div>
          </a>
          <div className="info">
            <p className="formatTime">{formatTime(item.created_at)}</p>
            <p className="description">{item.description}</p>
            <p className="formatDate">{formatDate(item.created_at)}</p>
            <div ref={kebabRef}>
              <button onClick={handlePopup}>
                <img className="kebob-img" src={kebob} alt="케밥 이미지"/>
              </button>
              <div className={`kebabpop ${kebabPopUp ? "show" : ""}`}>
                <button onClick={() => setCurrentModal(MODALS_ID.delete)}>
                  삭제하기
                </button>
                <AlertModal isOpen={currentModal === MODALS_ID.delete} title="링크 삭제" description={item.url} buttonText="삭제하기" onCloseClick={closeModal} onKeyDown={handleKeyDown}/>
                <button onClick={() => setCurrentModal(MODALS_ID.addFolder)}>
                  폴더에 추가
                </button>
                <AddLinkModal isOpen={currentModal === MODALS_ID.addFolder} userFolder={userFolder} selectedLinkUrl={item.url} selectedFolderId={selectedFolderId} setSelectedFolderId={setSelectedFolderId} onAddClick={() => { }} onCloseClick={() => {
                setSelectedFolderId(null);
                closeModal();
            }} onKeyDown={handleKeyDown}/>
              </div>
            </div>
          </div>
        </div>)}
    </>);
}
