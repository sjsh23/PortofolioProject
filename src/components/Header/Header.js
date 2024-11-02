import React, { useState } from 'react';
import '../styling.css';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle setting the active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Navbar bg="transparent" variant="light" expand="lg" sticky="top" className="custom-navbar p-3 shadow-sm">
      <Navbar.Brand href="#home" className="ms-3 fw-bold brand-name">
        <img 
          src="sjLogo.png"
          alt="Logo" 
          className="navbar-logo" 
          style={{ height: '40px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link 
            href="#home"
            onClick={() => handleNavClick('home')}
            className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            href="#about"
            onClick={() => handleNavClick('about')}
            className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </Nav.Link>
          <Nav.Link 
            href="#projects"
            onClick={() => handleNavClick('projects')}
            className={`nav-link-custom ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </Nav.Link>
          <Nav.Link 
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
