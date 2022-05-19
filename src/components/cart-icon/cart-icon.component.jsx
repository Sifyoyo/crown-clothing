import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import "./cart-icon.styles.scss"
import { CartListContext } from "../../contexts/cart-list.context"

const Carticon =  () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartListContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        




    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default Carticon