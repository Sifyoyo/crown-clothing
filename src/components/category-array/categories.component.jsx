import CategoryItem from "../category-item/category-item.component";
import {CategoryContainerHome} from "./categories.styles.jsx"

const Categories = ({categories}) => {

  return (
    <CategoryContainerHome>
       {categories.map((category)=> {
         const {id, /*title, imageUrl*/} = category
          return  <CategoryItem key={id} category={category}/>
        }
      
      )} 
    </CategoryContainerHome>
  )
}

export default Categories;