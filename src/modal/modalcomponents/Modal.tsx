import {
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { Portal } from "./Portal";
import "../../css/Modal.css";

/**
 * ts, tsx
 * js, jsx
 *
 * tsx, jsx => 컴포넌트들을 사용할 때 확장자명을 이렇게 사용한다.
 */

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
}

export const Modal = ({
  className,
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={`container${hideBackdrop ? "" : " backdrop"}`}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
