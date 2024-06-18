import React from 'react'
import '../../css/DogImg/dogImg.css'

export default function dogImg({url}) {
  return (
    <img className='dog-img' src={url} alt="" />
  )
}
