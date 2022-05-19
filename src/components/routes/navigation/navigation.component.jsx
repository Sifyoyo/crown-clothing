import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import Carticon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartListContext } from "../../../contexts/cart-list.context";

import "./navigation.styles.scss"

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartListContext);

    return (
        <Fragment>
        <div>
            <nav className="navigationBar">
            <Link className="logoNavContainer" to="/">
            <CrwnLogo className="crwnLogo" />
            </Link>
            <div className="navLinksContainer">
                <Link className="navLink" to="/shop">
                    Shop
                </Link>
                {
                    currentUser ? (
                        <a className="navLink" onClick={signOutUser}>Sign Out</a>
                        )
                        : (
                        <Link className="navLink" to="/auth">
                        Sign in
                        </Link>
                        )
                }
                <Carticon />
            </div>
             {isCartOpen && <CartDropdown />}
            </nav>
            <Outlet/>
        </div>
        </Fragment>
    )
  };

export default Navigation;