import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Navbar(props) {

    const [navState, setNavState] = useState("closed");

    function toggleNav() {

        if (navState === "open") { setNavState("closed"); }
        else if (navState === "closed") { setNavState("open"); }
    }


    return (
        <nav id="zeesyNav">
            <div className={navState} id="hamburger" onClick={() => toggleNav()}>
                <div className={navState} id="line1"></div>
                <div className={navState} id="line2"></div>
                <div className={navState} id="line3"></div>
            </div>
            <span className="navWrap">
                <div id="nav-links" className={navState}>
                    <div id="logoButton" className="logoLink">
                        <Link to={props.logoBtn} smooth={true} duration={500} onClick={() => toggleNav()} className="btn"><img id="logo" src="./assets/images/logo-02.png" className="" alt="navbar-logo" /></Link>
                    </div>
                    <div id="galleryButton" className="navLink">
                        <Link to={props.galleryBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="galleryText" className="navText">gallery</Link>
                    </div>
                    <div id="aboutButton" className="navLink">
                        <Link to={props.aboutBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="aboutText" className="navText">about</Link>
                    </div>
                    <div id="flavorsButton" className="navLink">
                        <Link to={props.flavorsBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="flavorsText" className="navText">flavors</Link>
                    </div>
                    <div id="pricingButton" className="navLink">
                        <Link to={props.pricingBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="pricingText" className="navText">pricing</Link>
                    </div>
                    <div id="contactButton" className="navLink">
                        <Link to={props.contactBtn} smooth={true} duration={500} onClick={() => toggleNav()} id="contactText" className="navText">contact</Link>
                    </div>
                </div>
            </span>

        </nav>
    )
}

export default Navbar;