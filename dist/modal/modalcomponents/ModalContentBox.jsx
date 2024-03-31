import "../../css/ModalContentBox.css";
export const ModalContentBox = ({ header, content, onCloseClick, }) => {
    return (<div className="modalbox">
      <button onClick={onCloseClick}>
        <img className="closebutton" src="/image/close.png" alt="X모양 닫기 버튼"/>
      </button>
      <div className="items">
        {header}
        {content}
      </div>
    </div>);
};
