import React, { useState } from 'react';
import './infocard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

const InfoCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <div className="cardinfo">
                <div className="cardinfo-header">
                    <div className="cardinfo-title">Barber Shop Viseu</div>
                    <button className={`favorite-button12 ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                        <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
                    </button>
                </div>
                <div className="cardinfo-subtitle">Viseu, Viseu | ★★★★☆</div>
                <div className="social-icons">
                    <i className="redessociais-estab fab fa-facebook"></i>
                    <i className="redessociais-estab fab fa-twitter"></i>
                    <i className="redessociais-estab fab fa-instagram"></i>
                </div>
                <div className="cardinfo-description">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </div>
                <Link to="/estabelecimento/reserva" className="cardinfo-button">
                    Marcar
                </Link>
            </div>
        </div>
    );
};

export default InfoCard;
