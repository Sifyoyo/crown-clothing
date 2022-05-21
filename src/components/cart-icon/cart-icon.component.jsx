import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import "./cart-icon.styles.scss"
import { CartListContext } from "../../contexts/cart-list.context"


const Carticon =  () => {
    const {cartCount,isCartOpen,setIsCartOpen} = useContext(CartListContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        
    //Mark: Cart count my version, Yihua uses useEffect to check if anything has changed on context.jsx, but still uses method .reduce()
    // const getEveryProductCountQuantity = cartItems.map(lists => lists.quantity);
    // const cartCount = getEveryProductCountQuantity.reduce((totalCount, currentIteration) => totalCount + currentIteration, 0);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            {/* <span className="item-count">{cartCount}</span> */}
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default Carticon