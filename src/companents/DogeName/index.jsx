import React, { useState } from 'react';
import DogeName from './dogeName.jsx';
import '../../css/DogeName/dogNameMain.css';

export default function dogeName({ randomBreeds }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

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
            <p>Modal content related to {selectedBreed} can go here...</p>
          </div>
        </div>
      )}
    </>
  );
}
