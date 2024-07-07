// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  // Dados de exemplo para o perfil
  const profileData = {
    imageUrl: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
    name: 'Gonçalo Silva',
    email: 'goncalo.silva.4@gmail.com'
  };

  // Extraindo os dados do perfil
  const { imageUrl, name, email } = profileData;

  return (
    <div className="sidebar">
      <div className="profile-sidebar">
        <img
          src={imageUrl}
          alt="Profile"
          className="profile-image-sidebar"
        />
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <nav>
        <div className='links-sidebar-container'>
          <Link to="/business/dashboard" className="links-sidebar">
            <i className="fas fa-tachometer-alt" style={{ marginRight: '5px' }}></i>Dashboard
          </Link>
          <Link to="/business/dashboard/alteracao-de-dados" className="links-sidebar">
            <i className="fas fa-user-edit" style={{ marginRight: '5px' }}></i>Alteração de Dados
          </Link>
          <Link to="/business/dashboard/marcacoes" className="links-sidebar">
            <i className="fas fa-calendar-alt" style={{ marginRight: '5px' }}></i>Marcações
          </Link>
          <Link to="/business/dashboard/avaliacoes" className="links-sidebar">
            <i className="fas fa-star" style={{ marginRight: '5px' }}></i>Avaliações
          </Link>
          <Link to="/estabelecimento" className="links-sidebar">
            <i className="fas fa-store" style={{ marginRight: '5px' }}></i>Página do Estabelecimento
          </Link>
          <Link to="/business/login" className="links-sidebar">
            <i className="fas fa-sign-out-alt" style={{ marginRight: '5px' }}></i>Sair
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
