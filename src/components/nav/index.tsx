import { useSearchParams, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import SearchBar from "../searchBar";

import logo from "./logoPVG.png";

import "./style.css";

const Nav = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isHome = location.pathname === "/";
  const isLiked = location.pathname === "/liked";

  return (
    <Navbar bg="dark" variant="dark" className="box-shadow" sticky="top">
      <Container>
        {isHome || isLiked ? (
          <Navbar.Brand href="/" className="navbar-logo">
            <img
              src={logo}
              height="32"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand href="/liked" className="view-liked">
            LIKED
          </Navbar.Brand>
        )}
        {!isHome && (
          <div className="d-flex">
            <SearchBar value={searchParams.get("q") || ""} size="sm" />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Nav;
