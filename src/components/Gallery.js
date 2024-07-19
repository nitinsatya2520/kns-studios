import React, { useState } from 'react';
import galleryImages from './galleryData';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(image)}>
            <img src={require(`../assets/images/${image.src}`)} alt={image.alt} />
            <div className="desc">{image.alt}</div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={require(`../assets/images/${selectedImage.src}`)} alt={selectedImage.alt} />
          <div className="caption">{selectedImage.alt}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
