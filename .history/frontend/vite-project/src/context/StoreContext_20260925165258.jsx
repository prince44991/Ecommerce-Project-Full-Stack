import { createContext } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const contextValue = { Img };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

