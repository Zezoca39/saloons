import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavbarComponent({ showSearchBar }) {
  return (
    <Navbar bg="black" className="justify-content-between align-items-center" fixed="top" style={{ height: '90px' }}>
      <Container>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>Saloons</span>{' '}Business
            </div>
          </div>
        </Link>
        <div style={{ color: 'white', fontSize: '25px' }}>
          Cabeleireiros Pôr do Sol
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
