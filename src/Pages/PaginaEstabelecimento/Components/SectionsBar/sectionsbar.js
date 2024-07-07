import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sectionsbar.css';

function SectionsBar() {
  return (
    <Navbar expand="lg" className="sectionsbar-navbar">
      <Nav className="mx-auto sectionsbar-nav">
        <Nav.Link as={Link} to="#precos">Preços</Nav.Link>
        <Nav.Link as={Link} to="#section2">Localização</Nav.Link>
        <Nav.Link as={Link} to="#section3">Equipa</Nav.Link>
        <Nav.Link as={Link} to="#section4">Avaliações</Nav.Link>
        <Nav.Link as={Link} to="#section5">Horário</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default SectionsBar;
