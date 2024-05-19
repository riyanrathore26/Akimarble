import React, { useState } from 'react';
import '../ComponentsCss/Gallery.css';

const images = [
  'https://via.placeholder.com/600x400', 
  'https://via.placeholder.com/600x400/0000FF/808080', 
  'https://via.placeholder.com/600x400/FF0000/FFFFFF',
  'https://via.placeholder.com/600x400/00FF00/000000', 
  'https://via.placeholder.com/600x400/FFFF00/000000',
  'https://via.placeholder.com/600x400/0000FF/808080', 
  'https://via.placeholder.com/600x400/FF0000/FFFFFF',
  'https://via.placeholder.com/600x400/00FF00/000000', 
  'https://via.placeholder.com/600x400/FFFF00/000000',
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <div className="big-image">
        <img src={images[selectedImageIndex]} alt="big" />
      </div>
      <div className="thumbnail-row">
        <button className="nav-button" onClick={handlePrevious}>Pre</button>
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img src={src} alt={`thumbnail-${index}`} />
          </div>
        ))}
        <button className="nav-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
