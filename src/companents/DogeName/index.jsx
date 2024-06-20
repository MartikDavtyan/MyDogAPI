import React, { useState, useEffect, act } from 'react';
import DogeName from "./dogeName.jsx"
import DogeImage from "../DogeImg/index.jsx"
import '../../css/DogeName/dogNameMain.css';

export default function DogeNameComponent({setActivner, randomBreeds }) {
  const [aktiv, setActiv] = useState([])
  function stugum(breed) {
    if (aktiv.includes(breed)) {
      setActiv(aktiv.filter((el) => {
        return el != breed
      }))
      setActivner(aktiv)  

    } else {
      setActiv([...aktiv, breed])
      setActivner(aktiv)
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
      <DogeImage randomBreeds={aktiv.length > 0 ? aktiv : randomBreeds} />
    </>
  );
}
