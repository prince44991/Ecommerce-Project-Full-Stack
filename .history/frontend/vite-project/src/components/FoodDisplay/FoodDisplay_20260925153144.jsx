import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../Fooditem/FoodItem';

const FoodDisplay = ({ Catagory }) => {
  const { Img } = useContext(StoreContext);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">{Catagory === 'All' ? 'Featured Shoes' : Catagory}</h3>
      </div>

      <div className="food-display">
        {Img.map((item, index) => (
          <FoodItem
            key={item.id || index}
            id={item.id}
            name={item.text}
            description={item.description}
            price={item.price}
            image={item.image}
            text="Best Seller"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
