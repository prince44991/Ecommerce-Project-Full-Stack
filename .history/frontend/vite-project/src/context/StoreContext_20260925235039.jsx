import { createContext, useState } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props) => {
  const [cartItems,setCartItems] = useState({})

  const addCart = (itemid) => {

    if(!cartItems[itemid]){
        setCartItems((prev)=> ({...prev,[itemid]:1}))
    }else{
        setCartItems((prev)=> ({...prev,[itemid]:+1}))
    }
  }

  const removecart = () => {
    setCartItems((prev)=> ({...prev,[itemid]:prev[itemid]-1}))
  }
  const contextValue = { Img,cartItems,setCartItems,addCart,removecart };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}                           
    </StoreContext.Provider>
  );
};

