import { createContext, useState } from "react";

const addCartItem = (cartItems, productsToAdd) => {
    //Fin if cartItems contains productstoAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToAdd.id)

    //If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productsToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    //Return new array with modified cartItems/ new cart item
    return [...cartItems, {...productsToAdd, quantity: 1}]
}

export const CartListContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartListProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems}

    return <CartListContext.Provider value={value}>{children}</CartListContext.Provider>

} 