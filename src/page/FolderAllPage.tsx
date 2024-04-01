import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import FolderList from "../components/FolderList";
import LinkItem from "../components/LinkItem";
import { getLinksUserIdFolder } from "../api";
import { useSearchLink } from "../components/useSearchLink";
import { getLinksUserIdLinks } from "../api";
const FolderAllPage = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>("");
  const [selectedFolderName, setSelectedFolderName] = useState<string>("전체");
  const [selectedTool, setSelectedTool] = useState<React.ReactNode>(null);
  const [userFolder, setUserFolder] = useState<{ data: any[] }>({ data: [] });
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserFolder = async () => {
      try {
        const data = await getLinksUserIdFolder();
        setUserFolder(data);
      } catch (error) {
        console.error("Error fetching user folder:", error);
      }
    };
    fetchUserFolder();
  }, []);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const linksData = await getLinksUserIdLinks(selectedFolderId);
        setLinks(linksData.data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, [selectedFolderId]);

  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  const handleItemClick = (folderName: string, folderId: string) => {
    setSelectedFolderId(folderId);
    setSelectedFolderName(folderName);
  };

  return (
    <>
      <Header
        userFolder={userFolder}
        folderId={selectedFolderId}
        setFolderId={setSelectedFolderId}
        folderName={selectedFolderName}
      />
      <SearchForm
        value={searchValue}
        onChange={handleChange}
        onCloseClick={handleCloseClick}
      />
      <FolderList
        userFolder={userFolder}
        folderId={selectedFolderId}
        folderName={selectedFolderName}
        onClick={handleItemClick}
        tools={setSelectedTool}
      />
      <LinkItem
        userFolder={userFolder}
        folderId={selectedFolderId}
        links={result}
      />
      {selectedTool && selectedTool}
    </>
  );
};

export default FolderAllPage;
