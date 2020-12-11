import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container className="p-3">
        <Navbar.Brand href="#home" className="font-weight-bold">Amarpreet Singh</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="mx-4" to="about" smooth duration={1000}>
            About
          </Link>
          <Link className="mx-4" to="projects" smooth duration={1000}>
            Projects
          </Link>
          <Link className="mx-4" to="skills" smooth duration={1000}>
            Skills
          </Link>
          <Link className="mx-4 cta-btn cta-btn--contact" to="footer" smooth duration={1000}>
            Say Hello
          </Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
