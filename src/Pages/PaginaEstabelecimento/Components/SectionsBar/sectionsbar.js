import React from 'react';
import './sectionsbar.css';

function SectionsBar() {
  const handleNavigate = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sectionsbar-container">
      <div className="sectionsbar-nav">
        <div className="sectionsbar-nav-link" onClick={() => handleNavigate(830)}>Preços</div>
        <div className="sectionsbar-nav-link" onClick={() => handleNavigate(1450)}>Localização</div>
        <div className="sectionsbar-nav-link" onClick={() => handleNavigate(2020)}>Equipa</div>
        <div className="sectionsbar-nav-link" onClick={() => handleNavigate(2580)}>Avaliações</div>
        <div className="sectionsbar-nav-link" onClick={() => handleNavigate(4000)}>Horário</div>
      </div>
    </div>
  );
}

export default SectionsBar;
