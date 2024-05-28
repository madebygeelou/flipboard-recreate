import React, { useState, useEffect } from 'react';
import ArtArticle from './ArtArticle';

const Gallery = () => {
    const [imageData, setImageData] = useState([]);
    const [pictureURL, setPictureURL] = useState('');
  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks');
        if (!response.ok) {
          throw new Error('Failed to fetch image data');
        }
        const data = await response.json();
        const randomizedData = data.data.sort(() => Math.random() - 0.5);
        setImageData(randomizedData);
        setPictureURL(data.config.iiif_url)
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };

    fetchImageData();
  }, []);
  return (
    <div className="gallery">
      {imageData.map((image) => (
        <ArtArticle key={image.id} image={image} pictureURL={pictureURL} />
      ))}
    </div>
  );
}; 

export default Gallery;