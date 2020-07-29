import React from 'react';
import "./style.css";

function Contact() {
    return (
        <div className="contact">
            <h1 id="contactTitle">Contact Us!</h1>
            <div id="contactContent" className="container">
                <div id="quote" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="https://www.instagram.com/zeesybake/"><img className="icon" src="./assets/icons/rfq-icon.png" alt="quote-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left">Request a quote!</p>
                    </div>
                </div>
                <div id="email" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <img className="icon" src="./assets/icons/em-icon.png" alt="email-icon" />
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left">zeesybake@gmail.com</p>
                    </div>
                </div>
                <div id="facebook" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <img className="icon" src="./assets/icons/fb-icon.png" alt="facebook-icon" />
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left">@ZeesyBake</p>
                    </div>
                </div>
                <div id="insta" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="https://www.instagram.com/zeesybake/"><img className="icon" src="./assets/icons/ig-icon.png" alt="instagram-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left">@zeesybake</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact;