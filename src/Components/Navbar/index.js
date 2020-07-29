import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {

    const [navState, setNavState] = useState("");

    function toggleNav() {

        if (navState === "open") {
            setNavState("");
        } else if (navState === "") {
            setNavState("open");
        }
    }


    return (
        <nav id="zeesyNav">
            <div id="navLogo">
                <Link to={props.logoBtn} smooth={true} duration={500} id="logoButton" className="btn p-0"><img id="logo" src="./assets/images/logo-08.png" className="mt-1 ml-2" alt="navbar-logo" /></Link>
            </div>
            <div className="hamburger" onClick={() => toggleNav()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <ul id="nav-links" className={navState}>
                <li>
                    <Link to={props.galleryBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="galleryButton" className="btn text-white">gallery</Link>
                </li>
                <li>
                    <Link to={props.aboutBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="aboutButton" className="btn text-white">about</Link>
                </li>
                <li>
                    <Link to={props.flavorsBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="flavorsButton" className="btn text-white">flavors</Link>
                </li>
                <li>
                    <Link to={props.pricingBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="pricingButton" className="btn text-white">pricing</Link>
                </li>
                <li>
                    <Link to={props.contactBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="contactButton" className="btn text-white">contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;