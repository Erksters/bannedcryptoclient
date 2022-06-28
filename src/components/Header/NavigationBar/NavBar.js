import React from "react";
import "../Header/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link href="/#/">Home</Nav.Link>

              <Nav.Link data-cy="search" href="/#/search">
                Search
              </Nav.Link>
              <Nav.Link data-cy="register" href="/#/register">
                Register
              </Nav.Link>
              <Nav.Link data-cy="about" href="/#/about">
                About
              </Nav.Link>
              <Nav.Link data-cy="reference" href="/#/reference">
                References
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
