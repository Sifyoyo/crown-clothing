import { createContext, useState } from "react";

export const CartListContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartListProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen ] = useState(false)
    const value = {isCartOpen, setIsCartOpen}

    return <CartListContext.Provider value={value}>{children}</CartListContext.Provider>

} 