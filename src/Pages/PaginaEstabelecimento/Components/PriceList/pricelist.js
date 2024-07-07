import React, { useState } from 'react';
import './pricelist.css';
import Overlay from './PriceOverlay';

const PriceList = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const cards = [
        {
            title: "Descoloração",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "10€"
        },
        {
            title: "Corte Masculino",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "20€"
        },
        {
            title: "Corte de Criança",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "30€"
        },
        {
            title: "Tratamento Capilar",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "40€"
        },
        {
            title: "Tratamento Capilar",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "40€"
        },
        {
            title: "Tratamento Capilar",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "40€"
        },
        {
            title: "Tratamento Capilar",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
            price: "40€"
        }
    ];

    const handleShowMore = () => {
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <div className="price-list-container" style={{marginBottom: '40px'}}>
            <div className="card-price">
                <div className="titulo-price">Preços</div>
                <div className="card-price2">
                    {cards.slice(0, 3).map((card, index) => (
                        <div key={index} className="cardprice">
                            <div className="cardprice-title">{card.title}</div>
                            <div className="cardprice-description">{card.description}</div>
                            <div className="cardprice-price">
                                <span>Desde </span>
                                <span className="price-value">{card.price}</span>
                            </div>
                        </div>
                    ))}
                    {cards.length > 3 && (
                        <div className="show-more-container">
                            <div className="show-more-text" onClick={handleShowMore}>
                                Ver Mais →
                            </div>
                        </div>
                    )}
                </div>
                {showOverlay && <Overlay cards={cards} onClose={handleCloseOverlay} />}
            </div>
        </div>
    );
};

export default PriceList;
