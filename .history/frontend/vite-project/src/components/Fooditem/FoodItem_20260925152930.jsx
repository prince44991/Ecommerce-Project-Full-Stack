import React from 'react'
import FoodItem from './FoodItem';
const FoodItem = ({id,name,price,desription,image}) => {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{desription}</h4>
      <h3>{price}</h3>
    </div>
  )
}

export default FoodItem
