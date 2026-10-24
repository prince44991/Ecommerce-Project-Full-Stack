import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({ Catagory }) => {
  const { Img } = useContext(StoreContext)

  return (
    <div className="food-display">
      {Img.map((item) => (
        <FoodItem
          key={item.id}
          id={item.id}
          name={item.text}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default FoodDisplay
