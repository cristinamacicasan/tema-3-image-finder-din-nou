import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, alt }) => {
    return (
    <ul className={styles.galleryItem}>
        <li >
         <img src={imageUrl} alt={alt} className={styles.image} />
        </li>
    </ul>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;