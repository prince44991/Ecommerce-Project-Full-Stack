import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'
import { useNavigate } from 'react-router-dom';

const FoodDisplay = ({ Catagory }) => {
  const { food = [] } = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className="food-display">
      {food.map((item) => {
        if (Catagory === "All" || Catagory === item.catagory) {
          return (
            <FoodItem
              key={item._id}
             
              id={item._id}
              name={item.productname}
              description={item.description}
              price={item.price}
              image={item.image}
              text={item.catagory}
            />
          );
        }

        return null;
      })}
    </div>
  )
}

export default FoodDisplay