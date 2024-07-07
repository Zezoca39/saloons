import React, { useState } from 'react';
import './galeria.css';

const images = [
  '/corteMasculino.jpg',
  '/corteFeminino.jpg',
];

const Galeria = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentImageIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="gallery-container">
            <img src={images[currentImageIndex]} alt={`Imagem ${currentImageIndex + 1}`} className="gallery-image" />
            <div className="gallery-navigation">
                <button onClick={goToPrevious} className="gallery-arrow">&#8592;</button>
                <div className="gallery-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        ></span>
                    ))}
                </div>
                <button onClick={goToNext} className="gallery-arrow">&#8594;</button>
            </div>
        </div>
    );
};

export default Galeria;
