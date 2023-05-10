import "./style.css";

import icon from "./icon3.svg";

const SearchBar = () => {
  return (
    <div id="search-bar-container">
      <div id="search-bar-button">
        <img
          id="search-bar-icon"
          src={icon}
          alt="search"
          height="32px"
          width="32px"
        />
      </div>
      <input id="search-bar" placeholder="Search images" />
    </div>
  );
};

export default SearchBar;
