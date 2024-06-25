import React from 'react';
import { Image } from '../models/Image';
import styles from '../styles/ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      <h1>Image Gallery</h1>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={image.url} alt={image.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
