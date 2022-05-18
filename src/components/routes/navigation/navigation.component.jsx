import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.scss"

const Navigation = () => {
    const {currentUser} = useContext(UserContext)


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
                
            </div>
            </nav>
            <Outlet/>
        </div>
        </Fragment>
    )
  };

export default Navigation;