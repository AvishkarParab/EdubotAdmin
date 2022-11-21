import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavbarPro = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar text-light">
        <Container>
          <Navbar.Brand className="text-light linkItem" href="#home">CARES GOA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/manage"> 
                <Nav.Item className="linkItem">Manage</Nav.Item>
              </NavLink>
              <NavLink to="/addmodule"> 
                <Nav.Item className="linkItem">Module</Nav.Item>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPro;
