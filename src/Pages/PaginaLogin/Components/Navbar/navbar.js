// NavbarComponent.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavbarComponent({ showSearchBar }) {
  return (
    <Navbar bg="black" className="justify-content-between align-items-center" fixed="top" style={{ height: '90px' }}>
      <Container>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div style={{ color: 'white', justifyContent: 'center' }}>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>Saloons</span>{' '}Business
            </div>
          </div>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
