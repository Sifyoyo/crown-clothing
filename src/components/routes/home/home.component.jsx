//import CategoryItem from "./components/category-item/category-item.component";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../category-array/categories.component"

const Home = () => {
  


  return (
    <Fragment>
    <Categories/>
    <Outlet/>
    </Fragment>

  );
}

export default Home;