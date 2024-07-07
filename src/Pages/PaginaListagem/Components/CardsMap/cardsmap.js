import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardsmap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CardImage5 from '../../../../Imagens/corteMasculino.jpg';
import CardImage4 from '../../../../Imagens/corteFeminino.jpg';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

// Componente para o card de filtro
const FilterCard = ({ filterName }) => (
    <div className="filter-cardcm">{filterName}</div>
);

const position = [40.661, -7.9097];

function CardsMap() {
    const navigate = useNavigate();

    // Função para truncar descrição longa
    const truncateDescription = (description, maxLength) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
    };

    // Array de objetos com informações dinâmicas para cada card
    const cardData = [
        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Miguel Loureiro Cabeleireiros',
            location: 'Viseu, Viseu',
            rating: '★★★☆☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, os profissionais não se consideram apenas barbeiros, mas sim, os profissionais não se consideram apenas barbeiros, mas sim, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage4
        },

        {
            title: 'Clipper Crew Barbers',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: 'https://i.pinimg.com/564x/d5/e2/71/d5e27193d5533069c021feb39dc04787.jpg'
        },

        {
            title: 'The Sharp Edge Barbers',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: 'https://i.pinimg.com/564x/1d/92/02/1d92023f6db1f139d33481763f578eee.jpg'
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },

        {
            title: 'Barber Shop',
            location: 'Viseu, Viseu',
            rating: '★★★★☆',
            description: 'Na barbearia Imagem D\'Homem, os profissionais não se consideram apenas barbeiros, mas sim, construtores de autoestima elevada...',
            filters: ['Corte', 'Barba', 'Tratamento', 'Estilo', 'Cor', 'Lavagem', 'Tratamento', 'Estilo', 'Cor', 'Lavagem'],
            image: CardImage5
        },
    ];

    const [favoritos, setFavoritos] = useState(Array(cardData.length).fill(false));

    const handleFavoritoClick = (index) => {
        const newFavoritos = [...favoritos];
        newFavoritos[index] = !newFavoritos[index];
        setFavoritos(newFavoritos);
    };

    return (
        <div className="containercm">
            <div className="listacm">
                {cardData.map((card, index) => (
                    <div
                        className="cardcm"
                        key={index}
                        onClick={() => navigate('/estabelecimento')}
                    >
                        <img className='imagemcm' src={card.image} alt={`Estabelecimento ${index + 1}`} />
                        <div className="conteudocm">
                            <div className="headercm">
                                <div className='titulocard'>{card.title}</div>
                                <span
                                    className="favoritoscm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleFavoritoClick(index);
                                    }}
                                >
                                    <FontAwesomeIcon icon={favoritos[index] ? faHeartSolid : faHeartRegular} style={{ color: favoritos[index] ? '#007bff' : '#bbb' }} />
                                </span>
                            </div>
                            <div style={{ marginTop:'-5px' }}>
                                <div className='Subtitulocard'>{`${card.rating}`}</div>
                                <div className='Subtitulocard'>{`${card.location}`}</div>
                            </div>
                            <div className='descricaocard'>{truncateDescription(card.description, 100)}</div>
                            <div className="filter-containercm">
                                {card.filters.slice(0, 5).map((filter, filterIndex) => (
                                    <FilterCard key={filterIndex} filterName={filter} />
                                ))}
                                {card.filters.length > 5 && (
                                    <div className="filter-cardcm">{`+${card.filters.length - 5}`}</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mapa">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Barber Shop Viseu <br />★★★★☆
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default CardsMap;
