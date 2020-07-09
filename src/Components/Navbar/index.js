import React from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {
    return (
        <div id="navbar" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                        <Link to={props.logoBtn} smooth={true} duration={500} id="logoButton" className="btn">logo</Link>

                    </div>

                    <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                        <ul className="nav pb-3 pt-2">
                            <li className="nav-item mx-2">
                                <Link to={props.galleryBtn} smooth={true} duration={500} id="galleryButton" className="btn">gallery</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to={props.flavorsBtn} smooth={true} duration={500} id="galleryButton" className="btn">flavors</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to={props.pricingBtn} smooth={true} duration={500} id="galleryButton" className="btn">pricing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to={props.contactBtn} smooth={true} duration={500} id="galleryButton" className="btn">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;