import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({ Catagory }) => {
  const { Img } = useContext(StoreContext)

  return (
    <div className="food-display">
      {Img.map((item, index) => (
        <FoodItem
          key={index}
          id={item._id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default FoodDisplay
