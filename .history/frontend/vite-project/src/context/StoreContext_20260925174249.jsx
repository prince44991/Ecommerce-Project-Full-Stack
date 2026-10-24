import { createContext } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props) => {
  const contextValue = { Img };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}                           
    </StoreContext.Provider>
  );
};

