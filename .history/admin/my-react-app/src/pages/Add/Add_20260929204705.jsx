import React from 'react'
import cloud from '../../assets/cloud-computing.png'
const Add = () => {
  return (
    <div className='add'>
      <h4>Upload Image</h4>
      <label htmlFor='image'>
    <img src={cloud} />
      </label>
      <input type='file' id='image' hidden required/>
      
    </div>
  )
}

export default Add
