import "../css/SearchForm.css";
import { ChangeEventHandler, MouseEventHandler } from "react";

type SearchFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

function SearchForm({ value, onChange, onCloseClick }: SearchFormProps) {
  return (
    <>
      <form className="formcontainer">
        <input
          className="search"
          type="search"
          placeholder="링크를 검색해 보세요."
          value={value}
          onChange={onChange}
        />
        {value && (
          <div className="textcontainer">
            <h3>
              {value}
              <span>으로 검색한 결과입니다.</span>
            </h3>
          </div>
        )}
      </form>
    </>
  );
}

export default SearchForm;
