import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productsToAdd) => {
    //Find if cartItems contains productstoAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToAdd.id)

    //If found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productsToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    //Return new array with modified cartItems/ new cart item
    return [...cartItems, {...productsToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productsToRemoveAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToRemoveAdd.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItems => cartItems.id !== productsToRemoveAdd.id);
    }

    return cartItems.map((cartItem) => {
                if(cartItem.id === productsToRemoveAdd.id){
                    return {...cartItem, quantity: cartItem.quantity - 1}
                }
                else {
                    return cartItem
                }
            })

    // //Find if cartItems contains productstoAdd
    // const existingCartItem = cartItems.find((cartItem) => cartItem.id === productsToRemoveAdd.id)

    // //If found, decrease quantity
    // if(existingCartItem) {
    //     return cartItems.map((cartItem) => {
    //         if(cartItem.id === productsToRemoveAdd.id && productsToRemoveAdd.quantity > 0){
    //             return {...cartItem, quantity: cartItem.quantity - 1}
    //         }
    //         else{
    //             return cartItem;
    //         }
    //     });
    // }
}

const removeItemAll = (cartItems,  productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

    if(existingCartItem){
        return cartItems.filter(cartItems => cartItems.id !== productToRemove.id);
    }

} 

export const CartListContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    removeItem: () => {},
    cartCount: 0
});

export const CartListProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect (()=> {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (productToRemoveAdd) => {
        setCartItems(removeCartItem(cartItems, productToRemoveAdd))
    }

    const removeItem = (productToRemove) => {
        setCartItems(removeItemAll(cartItems, productToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, removeItem}

    return <CartListContext.Provider value={value}>{children}</CartListContext.Provider>

} 