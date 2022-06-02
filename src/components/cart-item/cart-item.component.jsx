
import {CartItemContainer, ProductThumbnail, ItemDetails, ProductName} from "./cart-item.styles.jsx"

const CartItem = ({cartItem}) => {
    
    const {name, imageUrl, price, quantity} = cartItem; 

    return (
        <CartItemContainer>
            <ProductThumbnail src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <ProductName>{name}</ProductName>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;