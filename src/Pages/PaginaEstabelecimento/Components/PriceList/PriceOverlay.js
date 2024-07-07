import React, { useState } from 'react';
import './PriceOverlay.css';

const Overlay = ({ cards, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overlay-pricelist" onClick={onClose}>
      <div className="overlay-content-pricelist">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input-pricelist"
        />
        <div className="overlay-card-price-pricelist">
          {filteredCards.map((card, index) => (
            <div key={index} className="cardprice">
              <div className="cardprice-title">{card.title}</div>
              <div className="cardprice-description">{card.description}</div>
              <div className="cardprice-price">
                <span>Desde </span>
                <span className="price-value">{card.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
