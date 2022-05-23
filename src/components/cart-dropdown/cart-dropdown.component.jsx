import { useContext } from "react"

import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
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
        <div className="cart-dropdown-container">
            <div className="cart-items">
               {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))}
            </div> 
            
            {/* <Button buttonType="checkout"><Link className="checkout-link" to="checkout">Go to Checkout</Link></Button> */}
            <Button onClick={goToCheckOutHandler} buttonType="checkout">Go to Checkout</Button>
        </div>
    )

}

export default CartDropdown;