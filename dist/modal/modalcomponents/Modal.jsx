import { Portal } from "./Portal";
import "../../css/Modal.css";
export const Modal = ({ className, children, isOpen = false, disableScrollLock = false, hideBackdrop = false, onBackdropClick, onKeyDown, }) => {
    const handleBackdropClick = (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        if (onBackdropClick) {
            onBackdropClick(event);
        }
    };
    const handleKeyDown = (event) => {
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    if (!isOpen) {
        return null;
    }
    return (<Portal>
      <div className={`container${hideBackdrop ? "" : " backdrop"}`} onClick={handleBackdropClick} onKeyDown={handleKeyDown} tabIndex={0}>
        {children}
      </div>
    </Portal>);
};
