import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import "./cart-icon.styles.jsx"
import { CartListContext } from "../../contexts/cart-list.context"
import { CartIconContainer, ShoppingIconStyle, ItemCount } from "./cart-icon.styles.jsx"

const Carticon =  () => {
    const {cartCount,isCartOpen,setIsCartOpen} = useContext(CartListContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        
    //Mark: Cart count my version, Yihua uses useEffect to check if anything has changed on context.jsx, but still uses method .reduce()
    // const getEveryProductCountQuantity = cartItems.map(lists => lists.quantity);
    // const cartCount = getEveryProductCountQuantity.reduce((totalCount, currentIteration) => totalCount + currentIteration, 0);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconStyle/>
            {/* <span className="item-count">{cartCount}</span> */}
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default Carticon