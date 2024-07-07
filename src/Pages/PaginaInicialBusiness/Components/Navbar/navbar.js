// NavbarComponent.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function NavbarComponent({ showSearchBar }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/business/create');
  };

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
        <div className="d-flex align-items-center">
          <Navbar.Text>
            <Link to="/business/login" style={{color: 'white', fontFamily:'Inter', fontSize:'10px', marginRight:'20px' }}>Já tem conta? Entrar</Link>
          </Navbar.Text>
          <button onClick={handleClick} className="add-button2">Registar Empresa</button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
