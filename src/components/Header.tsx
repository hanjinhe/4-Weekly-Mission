import { Dispatch, SetStateAction } from "react";
import "../css/Header.css";
import FolderInfo from "./FolderInfo";
import LinkAddForm from "./LinkAddForm";

interface HeaderProps {
  userFolder: { data: any[] };
  folderId: string;
  setFolderId: Dispatch<SetStateAction<string>>;
  folderName: string;
}

function Header({
  userFolder,
  folderId,
  setFolderId,
  folderName,
}: HeaderProps) {
  return (
    <header className="header-main">
      {window.location.pathname === "/shared" ? (
        <FolderInfo />
      ) : (
        <LinkAddForm
          userFolder={userFolder}
          folderId={folderId}
          setFolderId={setFolderId}
          folderName={folderName}
        />
      )}
    </header>
  );
}

export default Header;
