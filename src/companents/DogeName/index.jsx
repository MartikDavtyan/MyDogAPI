import React, { useState, useEffect } from 'react';
import DogeName from './dogeName.jsx';
import '../../css/DogeName/dogNameMain.css';

export default function DogeNameComponent({ randomBreeds }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogIMG, setDogIMG] = useState([]);


  return (
    <>
      <div className="dogBreeds">
        {randomBreeds.map((el, index) => (
          <div key={index} className="dogBreed" onClick={() => handleClick(el)}>
            <DogeName breed={el} />
          </div>
        ))}
      </div>
    </>
  );
}
