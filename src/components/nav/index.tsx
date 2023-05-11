import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import SearchBar from "../searchBar";

import logo from "./logo.svg";

import "./style.css";

const Nav = () => {
  const [searchParams] = useSearchParams();
  const isHome = !!!searchParams.get("q");

  return (
    <Navbar bg="dark" variant="dark" className="box-shadow" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-logo">
          <img
            src={logo}
            width="48"
            height="48"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          PVG-Unsplash
        </Navbar.Brand>
        {!isHome && (
          <div className="d-flex">
            <SearchBar value={searchParams.get("q") || ""} />
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Nav;
