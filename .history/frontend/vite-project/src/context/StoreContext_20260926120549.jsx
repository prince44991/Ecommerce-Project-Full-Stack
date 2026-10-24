import { createContext, useEffect, useState } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props) => {
  const [cartItems, setCartItems] = useState({})

  const addCart = (itemid) => {
    if(!cartItems[itemid]){
      setCartItems((prev) => ({...prev,[itemid]:1}))
    }else{
      setCartItems((prev) => ({...prev,[itemid]:prev[itemid]+1}))
    }
  }

  const removeCart = (itemid) => {
     setCartItems
  }

  useEffect(() => {
    console.log(cartItems)
  },[cartItems])

  const contextValue = { Img, cartItems, setCartItems, addCart, removeCart };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

