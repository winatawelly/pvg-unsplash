import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logo from "./logo.svg";

import "./style.css";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar-logo">
          <img
            src={logo}
            width="48"
            height="48"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          PVG-Unsplash
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
