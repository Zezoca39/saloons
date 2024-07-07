import React from 'react';
import './estabelecimento.css';
import NavbarComponent from './Components/Navbar/navbar';
import InfoCard from './Components/InfoCard/infocard';
import Galeria from './Components/Galeria/galeria';
import SectionsBar from './Components/SectionsBar/sectionsbar';
import PriceList from './Components/PriceList/pricelist';
import Local from './Components/Local/local';
import Team from './Components/Equipa/equipa'
import CommentList from './Components/Comentarios/comentarios';
import Horarios from './Components/Horario/horario';
import Recomendados from './Components/Recomendados/recomendados'
import Footer from './Components/Footer/footer';

const Estabelecimento = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container-half">
        <div className="half1">
          <Galeria />
        </div>
        <div className="half2">
          <InfoCard />
        </div>
      </div>
      <div style={{ marginTop: '50px',marginBottom:'30px' }}>
      <SectionsBar/>
      </div>
        <div className="half3">
          <PriceList id="precos"/>
          <Local id="local"/>
          <Team id="equipa"/>
          <CommentList id="comentarios"/>
          <Horarios id="horarios"/>
          <Recomendados />
        </div>
        <Footer/>
    </div>
  );
};

export default Estabelecimento;
