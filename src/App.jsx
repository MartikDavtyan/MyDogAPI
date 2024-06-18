import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  console.log(dogBreeds);
  return (
    <>
    
    </>
  )
}

export default App
