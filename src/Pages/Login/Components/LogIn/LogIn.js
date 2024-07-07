import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    console.log('Login');
    navigate('/profile');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignUpClick2 = () => {
    navigate('/business');
  };

  return (
    <div className="login-container-login">
      <div className="right-side-login">
        <div className="overlay-login">
          <div style={{ fontWeight: 'bolder', fontSize: '60px' }}>Log In</div>
          <input type="email" placeholder="Introduza o seu email" className="input-field-login" />
          <input type="password" placeholder="Introduza a sua palavra-passe" className="input-field-login" />
          <button onClick={handleLoginClick} className="login-button-login">Entrar</button>
          <div className="signup-link-login">
            Ainda não tem conta? <span onClick={handleSignUpClick}>Registe-se aqui!</span>
          </div>
          <div className="signup-link-login">
            Quer registar um estabelecimento? <span onClick={handleSignUpClick2}>Registe aqui!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
