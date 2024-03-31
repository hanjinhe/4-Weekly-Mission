import SharedCard from "../components/SharedCard";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import { SetStateAction } from "react";

function ShearedPage() {
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
        <SearchForm />
        <SharedCard />
      </div>
    </>
  );
}
export default ShearedPage;
