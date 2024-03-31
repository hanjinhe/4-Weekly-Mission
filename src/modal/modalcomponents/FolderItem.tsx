import { MouseEventHandler } from "react";
import "../../css/FolderItem.css";

interface FolderItemProps {
  folderName: string;
  linkCount?: number;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <button
      className={`folderitembutton ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className={`folderitemname ${isSelected ? "selected" : ""}`}>
        {folderName}
      </span>
      <span className="folderitemcount">{linkCount}개 링크</span>
      {isSelected && (
        <img
          className="folderitemcheck"
          src="/image/check.png"
          alt="체크 아이콘"
        />
      )}
    </button>
  );
};
