import { createContext, useEffect, useState } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props ) => {
  const [cartItems,setCartItems] = useState({})
 
  const addCart = (itemid) => {

    if(!cartItems[itemid]){
        setCartItems((prev)=> ({...prev,[itemid]:1}))
    }else{
        setCartItems((prev)=> ({...prev,[itemid]:prev[itemid]+1}))
    }
  }

  const removecart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }
 
  useEffect(() => {
    console.log(cartItems)
  },[cartItems])

  const contextvalue = {Img,cartItems,setCartItems,addCart,removecart}

return(
   <StoreContext.Provider value={contextvalue}>
    {props.children}
   </StoreContext.Provider>
)
}

