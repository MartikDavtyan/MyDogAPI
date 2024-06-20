import React, { useState, useEffect, act } from 'react';
import DogeName from './dogeName.jsx';
import '../../css/DogeName/dogNameMain.css';

export default function DogeNameComponent({ randomBreeds }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [dogIMG, setDogIMG] = useState([]);
  const [aktiv, setActiv] = useState([])
  function stugum(breed) {

    if (aktiv.includes(breed)) {

      setActiv(aktiv.filter((el) => {
        return el != breed
      }))

    } else {
      setActiv([...aktiv, breed])
    }
  }
  return (
    <>
      <div className="dogBreeds">
        {randomBreeds.map((el, index) => (
          <div key={index} className={aktiv.includes(el) ? 'actived' : 'dogBreed'} onClick={() => stugum(el)} >
            <DogeName breed={el} />
          </div>
        ))}
      </div >
    </>
  );
}
