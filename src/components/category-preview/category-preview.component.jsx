import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {CategoryPreviewContainer, Title, Preview} from "./category-preview.jsx"

const CategoryPreview = ({title, products}) => {
    

    return (
        <CategoryPreviewContainer>
            <Title>
                <Link className="category-link" to={`/shop/${title.toLowerCase()}`}>
                    {title.toUpperCase()}
                </Link>
            </Title>
            <Preview>
                {
                    products.filter((_, index) => index < 4 ).map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </Preview>
        </CategoryPreviewContainer>
    )
    
}

export default CategoryPreview;