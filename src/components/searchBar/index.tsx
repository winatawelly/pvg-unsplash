import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import icon from "./icon3.svg";

interface Props {
  value?: string;
}

const SearchBar = ({ value }: Props) => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState(value);

  const onSearch = () => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div id="search-bar-container">
      <div id="search-bar-button" onClick={onSearch}>
        <img
          id="search-bar-icon"
          src={icon}
          alt="search"
          height="32px"
          width="32px"
        />
      </div>
      <input
        id="search-bar"
        placeholder="Search images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => e.key === "Enter" && onSearch()}
      />
    </div>
  );
};

export default SearchBar;
