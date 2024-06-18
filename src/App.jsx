import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './companents/Header'
import DogeName from './companents/DogeName'
import DogeImage from './companents/DogeImg'
import './App.css'

function App() {
  const [dogBreeds, setDogBreeds] = useState([])
  const [randomBreeds, setRandomBreeds] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        const breeds = Object.keys(data.message)
        setDogBreeds(breeds)
      })
  }, [])

  useEffect(() => {
    if (dogBreeds.length > 0) {
      function getRandomBreeds() {
        let arr = []
        for (let i = 0; i < 10; i++) {
          let randomIndex = Math.floor(Math.random() * dogBreeds.length)
          arr.push(dogBreeds[randomIndex])
        }
        return arr
      }
      setRandomBreeds(getRandomBreeds())
    }
  }, [dogBreeds])

  return (
    <>
      <Header />
      <DogeName randomBreeds={randomBreeds} />
      <DogeImage randomBreeds={randomBreeds} />
    </>
  )
}

export default App
