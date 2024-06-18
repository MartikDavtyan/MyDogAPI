import React from 'react'
import DogeName from './dogeName.jsx'
import '../../css/DogeName/dogNameMain.css'

export default function dogeName({randomBreeds}) {
  return (
    <>
      <div className="dogBreeds">
        {randomBreeds.map((el)=>{
          return (<>
            <div className="dogBreed">
              <DogeName breed={el}/>
            </div>
          </>)
        })}
      </div>
    </>
  )
}
