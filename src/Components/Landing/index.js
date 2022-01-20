import React from "react";
import "./style.css";

function Landing(props) {
    return (
        <div className="landing">
            <div id="landingContent">
                <img id="landingLogo" src="./assets/images/logo-05.png" alt="white-logo" />
                <h3 id="landingTagline" className="lightText mt-5">Gourmet cakes and cupcakes for any event</h3>
                <a href="https://www.westtenth.com/utah-wedding-guide"><img className="westTenth" src="./assets/images/westTenth.png" alt="west-Tenth" /></a>
            </div>
        </div>
    )
}
export default Landing;