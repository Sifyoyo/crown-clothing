import { Fragment } from "react"
import { Link } from "react-router-dom";
import {CategoryHomeLink, CategoryContainerItem, BackgroundImage, CategoryBodyContainer, CategoryTitles, CategorySubtitles} from "./category-item.styles.jsx"

const CategoryItem = ({category}) => {

    const {imageUrl, title} = category;

    return (
      <CategoryHomeLink to={`/shop/${title.toLowerCase()}`}>
      <Fragment>
            <CategoryContainerItem >
            <BackgroundImage style={{
              backgroundImage: `url(${imageUrl})`
            }}/>

            <CategoryBodyContainer>
                <CategoryTitles>{title.toUpperCase()}</CategoryTitles>
                <CategorySubtitles>Show Now</CategorySubtitles>
            </CategoryBodyContainer>

          </CategoryContainerItem> 
      </Fragment>
      </CategoryHomeLink>
    )
}

export default CategoryItem