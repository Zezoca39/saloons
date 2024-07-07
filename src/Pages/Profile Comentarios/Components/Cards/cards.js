import React from 'react';
import './cards.css';
import { useNavigate } from 'react-router-dom';

const AvaliacoesComponent = () => {
  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
    // Add more reviews as needed
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/ee/44/54/ee4454e7ba5e7b3af4d9fdb36d7b2dee.jpg',
      title: 'Barber Shop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      rating: 5
    },
  ];
  const navigate = useNavigate();
  const handleSaveProfile = () => {
    console.log('Profile saved');
    navigate('/profile')
  };

  const handleSaveProfileres = () => {
    console.log('Profile saved');
    navigate('/profile/reservas')
  };

  const handleSaveProfilefav = () => {
    console.log('Profile saved');
    navigate('/profile/favoritos')
  };

  const handleSaveProfileava = () => {
    console.log('Profile saved');
    navigate('/profile/avaliacoes')
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-nav">
          <span onClick={handleSaveProfile}>Perfil</span>
          <span>|</span>
          <span onClick={handleSaveProfileres}>Reservas</span>
          <span >|</span>
          <span onClick={handleSaveProfilefav}>Favoritos</span>
          <span>|</span>
          <span className='selected-perfil' onClick={handleSaveProfileava}>Avaliações</span>
        </div>
      </div>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <img src={review.image} alt={review.title} className="review-image" />
            <div className="review-details">
              <h3>{review.title}</h3>
              <div className="review-rating">{'★'.repeat(review.rating)}</div>
              <p>{review.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvaliacoesComponent;
