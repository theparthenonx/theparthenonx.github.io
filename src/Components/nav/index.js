import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <nav className="nav text-center">
            {/* <button className="btn-nav">                             */}
                <Link to="/" className="btn-nav">
                    Back to Home
                </Link>
            {/* </button> */}
        </nav>
    )
}
export default Nav;