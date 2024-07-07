import './businessbar.css';
import imgHero from '../../../../Imagens/banner.jpg';
import { useNavigate } from 'react-router-dom';

const HeroComponent = ({ imageUrl, children }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/business');
  };

  const containerStyle = {
    backgroundImage: `url(${imgHero})`,
    backgroundSize: 'cover',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="hero-container" style={containerStyle}>
      <span className="text" style={{ fontFamily: 'Libre Casion Text' }}>Saloons Business</span>
      <button onClick={handleClick} className="add-button">Registar Empresa</button>
    </div>
  );
};

export default HeroComponent;
