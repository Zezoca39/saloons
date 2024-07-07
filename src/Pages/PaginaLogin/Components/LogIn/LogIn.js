import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';
import leftImage from '../../../../Imagens/banner2.jpg';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Adicione a lógica de login aqui
    console.log('Login');
    navigate('/business/dashboard');
  };

  const handleSignUpClick = () => {
    navigate('/business/create');
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <img src={leftImage} alt="Left side" />
      </div>
      <div className="right-side">
        <div className="overlay-login">
          <div style={{ fontWeight:'bolder', fontSize:'50px'}}>Log In</div>
          <input type="email" placeholder="Introduza o seu email" className="input-field-login" />
          <input type="password" placeholder="Introduza a sua palavra-passe" className="input-field-login" />
          <button onClick={handleLoginClick} className="login-button-login">Entrar</button>
          <div className="signup-link-login">
          Ainda não registou a sua empresa? <span onClick={handleSignUpClick}>Registe aqui!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
