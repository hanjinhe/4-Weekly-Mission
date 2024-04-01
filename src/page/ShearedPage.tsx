import SharedCard from "../components/SharedCard";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import { SetStateAction, useState } from "react";
import { useSearchLink } from "src/components/useSearchLink";

function ShearedPage() {
  const [links, setLinks] = useState<any>([]);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  return (
    <>
      <Header
        userFolder={{
          data: [],
        }}
        folderId={""}
        setFolderId={function (value: SetStateAction<string>): void {}}
        folderName={""}
      />
      <div>
        <SearchForm
          value={searchValue}
          onChange={handleChange}
          onCloseClick={handleCloseClick}
        />
      </div>
    </>
  );
}
export default ShearedPage;
