import React from 'react';
import { Card } from 'react-bootstrap';
import './filtros.css';
import { useNavigate } from 'react-router-dom';
import CardImage1 from '../../../../Imagens/corteMasculino.jpg';
import CardImage2 from '../../../../Imagens/corteFeminino.jpg';
import CardImage3 from '../../../../Imagens/massagem.jpg';
import CardImage4 from '../../../../Imagens/manicure.jpg';
import CardImage5 from '../../../../Imagens/depilacao.jpg';


const CardListHorizontal = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/search");
    };
    return (
        <div className="card-list-horizontal-container">
            <div class="container">
                <h2 className="filtro-title">Filtros</h2>
            </div>
            <div className="card-list-horizontal d-flex justify-content-center">
                <Card className="custom-card" onClick={handleClick}>
                    <Card.Img variant="top" src={CardImage1} className="card-image" />
                    <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>Corte Masculino</Card.Title>
                </Card>

                <Card className="custom-card" onClick={handleClick}>
                    <Card.Img variant="top" src={CardImage2} className="card-image" />
                    <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>Corte Feminino</Card.Title>
                </Card>

                <Card className="custom-card" onClick={handleClick}>
                    <Card.Img variant="top" src={CardImage3} className="card-image" />
                    <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>Massagem</Card.Title>
                </Card>

                <Card className="custom-card" onClick={handleClick}>
                    <Card.Img variant="top" src={CardImage4} className="card-image" />
                    <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>Manicure</Card.Title>
                </Card>

                <Card className="custom-card" onClick={handleClick}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '20px' }}>Depilação</Card.Title>
                </Card>
            </div>
            <div class="container">
                <h2 className="filtro-more" onClick={handleClick}>Ver Mais →</h2>
            </div>
        </div>
    );
}

export default CardListHorizontal;
