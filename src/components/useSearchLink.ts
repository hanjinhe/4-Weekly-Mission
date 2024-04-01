import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export const useSearchLink = (links: any[]) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchValue("");
  };

  const result = {
    data: links.filter((link: any) => {
      const searchValueLowerCase = searchValue?.toLowerCase();
      const titleLowerCase = link?.title?.toLowerCase();
      const descriptionLowerCase = link?.description?.toLowerCase();
      const urlLowerCase = link?.url?.toLowerCase();

      return (
        titleLowerCase?.includes(searchValueLowerCase) ||
        descriptionLowerCase?.includes(searchValueLowerCase) ||
        urlLowerCase?.includes(searchValueLowerCase)
      );
    }),
  };

  return { searchValue, handleChange, handleCloseClick, result };
};
