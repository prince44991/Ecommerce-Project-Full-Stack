import { createContext } from "react";
import { Img } from "../assets/Img";
export const StoreContext = createContext(null)


const StoreContextProvider = () => {

    const contextvalue = {
     Img
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}