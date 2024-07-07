import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './recomendados.css';
import CardImage5 from '../../../../Imagens/depilacao.jpg';

const CardListHorizontal = () => {
    return (
        <div className="card-list-horizontal-container2">
            <div className="container-rec">
                <h2 className="filtro-title-rec">Recomendados</h2>
            </div>
            <div className="card-list-horizontal d-flex justify-content-center">
                <Card className="custom-card-rec" style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Miguel Loureiro Cabeleireiros</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card-rec" style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Salomé Cabeleireiros</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card-rec" style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>O Barbas</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="container">
                <Link to="/search" className="filtro-more-rec">Ver Mais →</Link>
            </div>
        </div>
    );
}

export default CardListHorizontal;
