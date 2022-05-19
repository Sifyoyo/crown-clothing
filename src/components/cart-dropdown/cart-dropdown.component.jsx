import { useContext } from "react"

import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { CartListContext } from "../../contexts/cart-list.context"

const CartDropdown = () => {

    const {cartItems} = useContext(CartListContext);

    console.log(cartItems);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
               {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))}
            </div> 
            <Button>Go To Checkout</Button>
        </div>
    )

}

export default CartDropdown;