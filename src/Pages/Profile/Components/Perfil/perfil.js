import React from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

const PerfilComponent = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        console.log('Edit Profile');
        navigate('/profile/edit');
    };

    const handleLogOut = () => {
        console.log('Log Out');
        navigate('/login');
    };
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
                <img src="https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg" alt="User Avatar" className="profile-avatar" />
                <h2>Gonçalo Silva</h2>
                <div className="profile-info">
                    <div className='info-perfil'>Email: <span>goncalosilva.45@gmail.com</span></div>
                    <div className='info-perfil'>Telemóvel: <span>923654781</span></div>
                    <div className='info-perfil'>Morada: <span>Almada, Lisboa</span></div>
                </div>
                <div className="profile-buttons">
                    <button onClick={handleEditProfile} className="edit-button">Editar Perfil</button>
                    <button onClick={handleLogOut} className="logout-button">Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default PerfilComponent;
