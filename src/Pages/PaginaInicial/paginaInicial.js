// PaginaInicial.js
import React, { useState, useEffect } from 'react';
import '../../styles.css';
import NavbarComponent from './Components/Navbar/navbar';
import HeroComponent from './Components/Hero/hero';
import FiltrosList from './Components/Filtros/filtros';
import CabeleireirosList from './Components/Cabeleireiros/cabeleireiros';
import EsteticistasList from './Components/Esteticistas/esteticistas';
import BusinessBar from './Components/BusinessBar/businessbar';
import FiltrosLocais from './Components/FiltrosLocal/filtrosLocal';
import Footer from './Components/Footer/footer';

const PaginaInicial = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowSearchBar(true); // Mostra a barra de pesquisa quando o scroll é maior que 200 pixels
      } else {
        setShowSearchBar(false); // Esconde a barra de pesquisa caso contrário
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <NavbarComponent showSearchBar={showSearchBar} /> {/* Passa o estado showSearchBar para a barra de navegação */}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <HeroComponent />
      </div>
      <div style={{ marginBottom: '-40px' }}>
        <FiltrosList />
      </div>
      <div style={{ marginBottom: '-30px' }}>
        <CabeleireirosList />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <EsteticistasList />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <BusinessBar />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <FiltrosLocais />
      </div>
      <Footer />
    </div>
  );
};

export default PaginaInicial;
