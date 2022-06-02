import {ProductCardContainer, ProductCardImg, ProductCardFooter, ProductCardName, ProductCardPrice} from "./product-card.styles.jsx"
import { useContext } from "react";
import { CartListContext } from "../../contexts/cart-list.context";

import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartListContext);

    const addProductToCart = () => addItemToCart(product);
    
    return(
    <ProductCardContainer>
        <ProductCardImg src={imageUrl} alt={`${name}`}/>
        <ProductCardFooter>
            <ProductCardName>{name}</ProductCardName>
            <ProductCardPrice>{price}</ProductCardPrice>
        </ProductCardFooter>
        <Button onClick={addProductToCart} buttonType={BUTTON_TYPES_CLASSES.inverted}>Add to Cart</Button>
    </ProductCardContainer>
    )
}

export default ProductCard;