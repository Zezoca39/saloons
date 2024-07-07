import './hero.css';
import imgHero from '../../../../Imagens/ImagemHeroi.png';
import SearchBar from '../SearchBar/searchbar';

const HeroComponent = ({ imageUrl, children }) => {
  const containerStyle = {
    backgroundImage: `url(${imgHero})`,
    backgroundSize: 'cover',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginTop: '-60px' }}>
        <div className="text" style={{ fontFamily: 'Libre Casion Text', fontSize: '120px' }}>Saloons</div>
        <div style={{ marginTop: '-20px' }}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
