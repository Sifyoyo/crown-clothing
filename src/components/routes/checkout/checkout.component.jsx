import { CartListContext } from "../../../contexts/cart-list.context";
import { useContext } from "react";
import CheckoutList from "../../checkout-list/checkout-list.component";
import {CheckoutTable, CheckoutTr, CheckoutTotalPrice} from "./checkout.styles.jsx"

const Checkout = () => {
    
    const {cartItems,  totalPrice} = useContext(CartListContext);
    

    return(
        <div className="checkoutcontainer">
            <CheckoutTable>
                <thead>
                    <CheckoutTr>
                    <td>Product</td>
                    <td>Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Remove</td>
                    </CheckoutTr>
                </thead>
                <tbody className="listOverProducts">
        
                {cartItems.map((item) =>{
                    return <CheckoutList key={item.id} checkoutList={item}/>     
                })}

                </tbody>
            </CheckoutTable>
            <CheckoutTotalPrice>Total: ${totalPrice}</CheckoutTotalPrice>
        </div>
    )
}

export default Checkout;