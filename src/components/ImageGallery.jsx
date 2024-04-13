import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css'; // Importăm modulele CSS pentru stilizare


const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  })).isRequired,
};




export default ImageGallery;
