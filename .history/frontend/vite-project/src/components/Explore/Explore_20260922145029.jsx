import React from 'react'
import './Explore.css'
import { Img } from '../../assets/Img.js'

const Explore = () => {
  return (
   
    {
        Img.map((r) => {
            return(
                <div>
                  <img src={r.image} alt='image'></img>
                  <p>{r.text}</p>
                </div>
            )
        })
    }
    
  )
}

export default Explore
