import React from 'react';
import './paginaListagem.css';
import NavbarComponent from './Components/Navbar/navbar';
import FiltrosBar from './Components/FiltrosBar/filtrosbar'
import CardsMap from './Components/CardsMap/cardsmap'

const PginaListagem = () => {
  return (
    <div>
      <NavbarComponent />
      <FiltrosBar />
      <div style={{ marginBottom: '15px' }}></div>
      <div style={{ borderBottom: '2px solid #ccc' }}></div>
      <div style={{ marginBottom: '20px' }}></div>
      <CardsMap />
    </div>
  );
};

export default PginaListagem;
