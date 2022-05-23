import { useContext } from "react";
import { CartListContext } from "../../contexts/cart-list.context";
import "./chekout-list.styles.scss"


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
        <tr className="checkout-item-row">
            <td className="checkout-img"><img src={`${imageUrl}`}/></td>
            <td className="checkout-name">{name}</td>
            <td className="checkout-quantity"><span onClick={RemoveOneProduct}>-</span>{quantity}<span onClick={AddProduct}>+</span></td>
            <td className="checkout-price">${price}</td>
            <td onClick={RemoveProduct} className="Removebutton">&#10005;</td>
        </tr>

)
}

export default CheckoutList;
