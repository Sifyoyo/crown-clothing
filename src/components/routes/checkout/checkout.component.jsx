import { CartListContext } from "../../../contexts/cart-list.context";
import { useContext } from "react";
import CheckoutList from "../../checkout-list/checkout-list.component";
import "./checkout.styles.scss"

const Checkout = () => {
    
    const {cartItems} = useContext(CartListContext);
    
    return(
        <div className="checkoutcontainer">
            <table>
                <thead>
                    <tr>
                    <td>Product</td>
                    <td>Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Remove</td>
                    </tr>
                </thead>
                <tbody className="listOverProducts">
        
                {cartItems.map((item) =>{
                    return <CheckoutList key={item.id} checkoutList={item}/>     
                })}

                </tbody>
            </table>
            <span className="total-price">Total: </span>
        </div>
    )
}

export default Checkout;