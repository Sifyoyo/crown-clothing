import { useContext } from "react"

import {CartDropdownContainer, CartItemsStyle,  EmptyMessage} from "./cart-dropdown.styles"
//import "./cart-dropdown.styles.scss"
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component"
import CartItem from "../cart-item/cart-item.component"
import { CartListContext } from "../../contexts/cart-list.context"
import { /*Link,*/ useNavigate } from "react-router-dom"


const CartDropdown = () => {

    const {cartItems} = useContext(CartListContext);

    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate("/checkout");
    }

    return (
        <CartDropdownContainer>
            <CartItemsStyle>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item}/>
                        ))) : (
                            <EmptyMessage>Your cart is empty</EmptyMessage>
                        )
                }
            
            </CartItemsStyle> 
            
            {/* <Button buttonType="checkout"><Link className="checkout-link" to="checkout">Go to Checkout</Link></Button> */}
            <Button onClick={goToCheckOutHandler} buttonType={BUTTON_TYPES_CLASSES.checkout}>Go to Checkout</Button>
        </CartDropdownContainer>
    )

}

export default CartDropdown;