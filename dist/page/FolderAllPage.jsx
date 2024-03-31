import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import FolderList from "../components/FolderList";
import LinkItem from "../components/LinkItem";
import { getLinksUserIdFolder } from "../api";
const FolderAllPage = () => {
    const [selectedFolderId, setSelectedFolderId] = useState("");
    const [selectedFolderName, setSelectedFolderName] = useState("전체");
    const [selectedTool, setSelectedTool] = useState(null);
    const [userFolder, setUserFolder] = useState({ data: [] });
    const handleItemClick = (folderName, folderId) => {
        setSelectedFolderId(folderId);
        setSelectedFolderName(folderName);
    };
    useEffect(() => {
        const fetchUserFolder = async () => {
            try {
                const data = await getLinksUserIdFolder();
                setUserFolder(data);
            }
            catch (error) {
                console.error("Error fetching user folder:", error);
            }
        };
        fetchUserFolder();
    }, []);
    return (<>
      <Header userFolder={userFolder} folderId={selectedFolderId} setFolderId={setSelectedFolderId} folderName={selectedFolderName}/>
      <SearchForm />
      <FolderList userFolder={userFolder} folderId={selectedFolderId} folderName={selectedFolderName} onClick={handleItemClick} tools={setSelectedTool}/>
      <LinkItem userFolder={userFolder} folderId={selectedFolderId} folderName={selectedFolderName}/>
      {selectedTool && selectedTool}
    </>);
};
export default FolderAllPage;
