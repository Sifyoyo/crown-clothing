import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import Carticon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartListContext } from "../../../contexts/cart-list.context";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";


// import "./navigation.styles.scss"


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartListContext);

    return (
        <Fragment>
            <NavigationContainer>
            <LogoContainer to="/">
            <CrwnLogo className="crwnLogo" />
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to="/shop">
                    Shop
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
                        )
                        : (
                        <NavLink to="/auth">
                        Sign in
                        </NavLink>
                        )
                }
                <Carticon />
            </NavLinksContainer>
             {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
        </Fragment>
    )
  };

export default Navigation;