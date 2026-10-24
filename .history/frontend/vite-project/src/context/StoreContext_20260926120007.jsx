import { createContext, useEffect, useState } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props) => {
  const [cartItems, setCartItems] = useState({})

  const addcart = (itemid) => {
    if(!cartItems[itemid]){
      setCartItems((prev) => ({...prev,[itemid]:1}))
    }else{
      setCartItems((prev) => ({...prev,[itemid]:prev[itemid]+1}))
    }
  }

  const removeCart = (itemid) => {
    setCartItems((prev) => {
      const nextQty = (prev[itemid] || 0) - 1

      if (nextQty <= 0) {
        const { [itemid]: removedItem, ...rest } = prev
        return rest
      }

      return { ...prev, [itemid]: nextQty }
    })
  }

  useEffect(() => {
    console.log(cartItems)
  },[])

  const contextValue = { Img, cartItems, setCartItems, addcart, removeCart };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

