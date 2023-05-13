import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import icon from "./icon3.svg";

interface Props {
  value?: string;
  size?: "sm" | "md";
}

const SearchBar = ({ value, size = "md" }: Props) => {
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
        <button
          id="search-bar-button"
          type="submit"
          className={size === "sm" ? "search-small" : ""}
        >
          <img
            role="button"
            id="search-bar-icon"
            className={size === "sm" ? "search-icon-small" : ""}
            src={icon}
            alt="search"
          />
        </button>
        <input
          required
          id="search-bar"
          className={size === "sm" ? "search-small" : ""}
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
