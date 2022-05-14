import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import "./navigation.styles.scss"

const Navigation = () => {
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
                <Link className="navLink" to="/sign-in">
                    Sign in
                </Link>
            </div>
            </nav>
            <Outlet/>
        </div>
        </Fragment>
    )
  };

export default Navigation;