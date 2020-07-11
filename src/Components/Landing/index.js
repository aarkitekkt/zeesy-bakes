import React from "react";
import "./style.css";
import { Link } from 'react-scroll';

function Landing(props) {
    return (
        <div className="landing">
            <div id="landingContent">
                <img id="logo" src="./assets/images/logo-05.png" alt="white-logo" />
                <h3 id="landingTagline" className="lightText mt-5">Gourmet cakes and cupcakes for any event</h3>
            </div>

            <Link to={props.galleryBtn} smooth={true} duration={500} id="toGallery" className="btn">gallery</Link>
        </div>
    )
}
export default Landing;