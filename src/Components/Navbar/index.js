import React from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {
    return (
        <div id="navbar" className="container-fluid text-light">

            <div className="row">
                <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                    <Link to={props.logoBtn} smooth={true} duration={500} id="logoButton" className="btn p-0"><img id="navLogo" src="./assets/images/logo-08.png" className="p-0" alt="navbar-logo" /></Link>

                </div>

                <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                    <ul className="nav pt-2">
                        <li className="nav-item mx-1">
                            <Link to={props.galleryBtn} smooth={true} duration={500} id="galleryButton" className="btn">gallery</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to={props.flavorsBtn} smooth={true} duration={500} id="galleryButton" className="btn">flavors</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to={props.pricingBtn} smooth={true} duration={500} id="galleryButton" className="btn">pricing</Link>
                        </li>
                        <li className="nav-item mx-1">
                            <Link to={props.contactBtn} smooth={true} duration={500} id="galleryButton" className="btn">contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;