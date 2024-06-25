import { useState, useEffect } from 'react';
import { getImages } from '../api';
import { Image } from '../models/Image';

const useFetchImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getImages({ _width: 380 });
        setImages(response.data.data);
      } catch (err) {
        setError('Error fetching images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};

export default useFetchImages;
