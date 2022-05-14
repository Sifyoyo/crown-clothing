import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss"

const Categories = ({categories}) => {

  return (
    <div className="categories-container">
       {categories.map((category)=> {
         const {id, /*title, imageUrl*/} = category
          return  <CategoryItem key={id} category={category}/>
        }
      
      )} 
    </div>
  )
}

export default Categories;