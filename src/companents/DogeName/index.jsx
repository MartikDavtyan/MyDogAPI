import React, { useState, useEffect } from 'react';
import DogeName from './dogeName.jsx';
import '../../css/DogeName/dogNameMain.css';

export default function DogeNameComponent({ randomBreeds }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogIMG, setDogIMG] = useState([]);

  useEffect(() => {
    if (isOpen && selectedBreed) {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`)
        .then((res) => res.json())
        .then((data) => {
          setDogIMG(data.message);
        })
        .catch((error) => console.error('Error fetching dog images:', error));
    }
  }, [isOpen, selectedBreed]);

  const handleClick = (breed) => {
    setSelectedBreed(breed);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="dogBreeds">
        {randomBreeds.map((el, index) => (
          <div key={index} className="dogBreed" onClick={() => handleClick(el)}>
            <DogeName breed={el} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>{selectedBreed}</h2>
            <div className="dogImages">
              {dogIMG.map((el, index) => (
                <img key={index} src={el} alt={`Dog ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
