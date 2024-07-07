import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgPerfil from '../../../../Imagens/Icons/Person.png';
import './navbar.css';

function NavbarComponent() {
  return (
    <Navbar bg="black" className="justify-content-between align-items-center" style={{ height:'90px' }}>
      <Container>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div style={{ color: 'white', justifyContent:'center' }}>
            <div>
              <span style={{ fontWeight: 'bold', fontSize: '35px' }}>Saloons</span>
            </div>
          </div>
        </Link>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="">
            <div style={{ marginLeft: '20px' }}>
              <img
                src={imgPerfil}
                height="30"
                className="d-inline-block align-top"
                alt="Perfil"
              />
            </div>
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
