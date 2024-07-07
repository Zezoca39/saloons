import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

const ProfileEditComponent = () => {
  const navigate = useNavigate();
  const [email] = useState('goncalosilva.45@gmail.com');
  const [phone, setPhone] = useState('923654781');
  const [address, setAddress] = useState('Almada, Lisboa');

  const handleSaveProfile = () => {
    console.log('Profile saved');
    navigate('/profile')
  };

  const handleSaveProfileres = () => {
    console.log('Profile saved');
    navigate('/profile/reservas')
  };

  const handleSaveProfilefav = () => {
    console.log('Profile saved');
    navigate('/profile/favoritos')
  };

  const handleSaveProfileava = () => {
    console.log('Profile saved');
    navigate('/profile/avaliacoes')
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-nav">
          <span className='selected-perfil' onClick={handleSaveProfile}>Perfil</span>
          <span>|</span>
          <span onClick={handleSaveProfileres}>Reservas</span>
          <span >|</span>
          <span onClick={handleSaveProfilefav}>Favoritos</span>
          <span>|</span>
          <span onClick={handleSaveProfileava}>Avaliações</span>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-avatar-wrapper">
          <img src="https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg" alt="User Avatar" className="profile-avatar" />
          <span className="change-avatar">Alterar</span>
        </div>
        <h2>Gonçalo Silva</h2>
        <div className="profile-info">
          <div className='info-perfil'>
            Email:
            <input type="email" value={email} className="input-field-view" readOnly />
          </div>
          <div className='info-perfil'>
            Telemóvel:
            <input type="text" value={phone} className="input-field-edit" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='info-perfil'>
            Morada:
            <input type="text" value={address} className="input-field-edit" onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
        <div className="profile-buttons">
          <button onClick={handleSaveProfile} className="edit-button">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditComponent;
