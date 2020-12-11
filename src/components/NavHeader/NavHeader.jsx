import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="px-3">
        <Navbar.Brand href="#home">Amarpreet Singh</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="about" smooth duration={1000}>
            About
          </Link>
          <Link to="projects" smooth duration={1000}>
            Projects
          </Link>
          <Link to="skills" smooth duration={1000}>
            Skills
          </Link>
          <Link to="footer" smooth duration={1000}>
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
