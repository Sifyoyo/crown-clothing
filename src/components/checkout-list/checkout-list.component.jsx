import { useContext } from "react";
import { CartListContext } from "../../contexts/cart-list.context";
import {CheckoutImg, IncrementDecrementSymbol, RemoveAllButton, CheckoutTr} from "./chekout-list.styles.jsx"



const CheckoutList = ({checkoutList})  => {


    const {cartItems, setCartItem, addItemToCart, removeItemToCart, removeItem} = useContext(CartListContext)

    const {id, name, imageUrl, quantity, price} = checkoutList;

    const AddProduct = () => addItemToCart(checkoutList);

    const RemoveOneProduct = () => removeItemToCart(checkoutList);

    const RemoveProduct  = () => removeItem(checkoutList);

    // const AddProduct = () => {
    //     // const existingCartItem = cartItems.find((cartItem) => cartItem.id === id)
        
    //     // if(existingCartItem){
    //     //     cartItems.map((cartItem) => cartItem.id === id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    //     //     console.log("found");
    //     // }

    // }

    return(
        <CheckoutTr>
            <td className="checkout-img"><CheckoutImg src={`${imageUrl}`}/></td>
            <td className="checkout-name">{name}</td>
            <td className="checkout-quantity"><IncrementDecrementSymbol onClick={RemoveOneProduct}>-</IncrementDecrementSymbol><span className="quantity">{quantity}</span><IncrementDecrementSymbol onClick={AddProduct}>+</IncrementDecrementSymbol></td>
            <td className="checkout-price">${price}</td>
            <RemoveAllButton onClick={RemoveProduct}>&#10005;</RemoveAllButton>
        </CheckoutTr>

)
}

export default CheckoutList;
