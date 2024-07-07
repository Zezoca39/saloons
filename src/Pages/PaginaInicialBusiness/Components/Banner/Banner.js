import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const BusinessBanner = () => {
  const navigate = useNavigate();

  const handleAddBusinessClick = () => {
    navigate('/business/create');
  };

  return (
    <div className="container-bb">
      <div className="overlay-bb">
        <div style={{ fontWeight:'bolder', fontSize:'60px', marginBottom:'20px'}}>Registe a sua empresa</div>
        <div style={{marginBottom:'30px'}}>
          O Saloons Business permite adicionar a sua empresa para que a
          possa gerir de maneira intuitiva e proporcionar a melhor experiência
          possível aos seus clientes.
        </div>
        <button onClick={handleAddBusinessClick} className="add-button-bb">
          Registar Empresa
        </button>
      </div>
    </div>
  );
};

export default BusinessBanner;
