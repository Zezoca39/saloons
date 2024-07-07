import React from 'react';
import { Card } from 'react-bootstrap';
import './cabeleireiros.css';
import CardImage5 from '../../../../Imagens/depilacao.jpg';
import { useNavigate } from 'react-router-dom';

const CardListHorizontal = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/estabelecimento");
    };
    const handleClick2 = () => {
        navigate("/search");
    };
    return (
        <div className="card-list-horizontal-container">
            <div className="container">
                <h2 className="filtro-title">Cabeleireiros</h2>
            </div>
            <div className="card-list-horizontal d-flex justify-content-center">
                <Card className="custom-card" onClick={handleClick} style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={'https://i.pinimg.com/564x/81/9c/9f/819c9f162263c506eed04219557a3a26.jpg'} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Miguel Loureiro Cabeleireiros</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card" onClick={handleClick} style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Salomé Cabeleireiros</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card" onClick={handleClick} style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={'https://i.pinimg.com/564x/81/9c/9f/819c9f162263c506eed04219557a3a26.jpg'} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>O Barbas</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card" onClick={handleClick} style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={CardImage5} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Carolina Cabeleireiros</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="custom-card" onClick={handleClick} style={{ minHeight: '350px', maxHeight: '350px' }}>
                    <Card.Img variant="top" src={'https://i.pinimg.com/564x/81/9c/9f/819c9f162263c506eed04219557a3a26.jpg'} className="card-image" />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <Card.Title className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '-8px', marginLeft: '0px' }}>Barber Shop Viseu</Card.Title>
                        <Card.Text className="card-text">
                            Viseu, Viseu | ★★★★☆
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="container">
                <h2 className="filtro-more" onClick={handleClick2}>Ver Mais →</h2>
            </div>
        </div>
    );
}

export default CardListHorizontal;
