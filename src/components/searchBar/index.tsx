import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import icon from "./icon3.svg";

interface Props {
  value?: string;
}

const SearchBar = ({ value }: Props) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const [query, setQuery] = React.useState(value || "");

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={onSearch} ref={formRef}>
      <div id="search-bar-container">
        <button id="search-bar-button" type="submit">
          <img
            role="button"
            id="search-bar-icon"
            src={icon}
            alt="search"
            height="32px"
            width="32px"
          />
        </button>
        <input
          required
          id="search-bar"
          placeholder="Search images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent) =>
            e.key === "Enter" &&
            formRef &&
            formRef.current &&
            formRef.current.submit
          }
        />
      </div>
    </form>
  );
};

export default SearchBar;
