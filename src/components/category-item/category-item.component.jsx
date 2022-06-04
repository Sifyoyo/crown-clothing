import { Fragment } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {CategoryHomeLink, CategoryContainerItem, BackgroundImage, CategoryBodyContainer, CategoryTitles, CategorySubtitles} from "./category-item.styles.jsx"

const CategoryItem = ({category}) => {

    const {imageUrl, title, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)

    return (
      // <CategoryHomeLink to={`/shop/${title.toLowerCase()}`}>  //Mark: made a link
      <Fragment>
            <CategoryContainerItem onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>

            <CategoryBodyContainer>
                <CategoryTitles>{title.toUpperCase()}</CategoryTitles>
                <CategorySubtitles>Show Now</CategorySubtitles>
            </CategoryBodyContainer>

          </CategoryContainerItem> 
      </Fragment>
      // </CategoryHomeLink>
    )
}

export default CategoryItem