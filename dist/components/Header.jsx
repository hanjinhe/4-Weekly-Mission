import "../css/Header.css";
import FolderInfo from "./FolderInfo";
import LinkAddForm from "./LinkAddForm";
function Header({ userFolder, folderId, setFolderId, folderName, }) {
    return (<header className="header-main">
      {window.location.pathname === "/shared" ? (<FolderInfo />) : (<LinkAddForm userFolder={userFolder} folderId={folderId} setFolderId={setFolderId} folderName={folderName}/>)}
    </header>);
}
export default Header;
