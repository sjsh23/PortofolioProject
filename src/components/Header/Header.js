// src/components/Header.js
import React from 'react';
import '../styling.css';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="transparent" variant="light" expand="lg" sticky="top" className="custom-navbar p-3 shadow-sm">
      <Navbar.Brand href="#home" className="ms-3 fw-bold brand-name">
      <img 
          src="sjLogo.png"
          alt="Logo" 
          className="navbar-logo" 
          style={{ height: '40px' }} // Adjust height as needed
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
          <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
          <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
