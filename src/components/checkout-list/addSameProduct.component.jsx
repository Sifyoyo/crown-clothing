import { useContext } from "react";
import { CartListContext } from "../../contexts/cart-list.context";




const AddCount = (item) => {

    const {cartItems, setCartItem} = useContext(CartListContext)

    console.log(cartItems, item);

    return(
        <span>+</span>
    )

}

export default AddCount;