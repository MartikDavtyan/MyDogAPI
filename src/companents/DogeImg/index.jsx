import React, { useState, useEffect } from 'react';
import DogHeader from './dogImgHeader';
import DogImg from './dogImg'
import '../../css/DogImg/dogImgMain.css';

export default function Index({ randomBreeds }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const breedImagesPromises = randomBreeds.map(breed =>
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
          .then(response => {
            return response.json();
          })
          .then(data => data.message)
      );

      Promise.all(breedImagesPromises)
        .then(breedImages => {
          setImages(breedImages);
        })
    };

    fetchImages();
  }, [randomBreeds]);

  return (
    <div className="imgMain">
      <DogHeader />
      {images.map((url)=>{
        return <DogImg url={url} />
      })}
    </div>
  );
}
