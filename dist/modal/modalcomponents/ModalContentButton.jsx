import "../../css/ModalContentButton.css";
export const ModalContentButton = ({ children, onClick, themeColor = "blue", }) => {
    return (<button className={`Modalbutton ${themeColor}`} onClick={onClick}>
      {children}
    </button>);
};
