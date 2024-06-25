import React from 'react';
import ImageGallery from '../components/ImageGallery';
import useFetchImages from '../hooks/useFetchImages';

const Home: React.FC = () => {
  const { images, loading, error } = useFetchImages();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <ImageGallery images={images} />;
};

export default Home;
