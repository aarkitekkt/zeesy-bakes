import React from 'react';
import "./style.css";

function Contact() {
    return (
        <div className="contact">
            <h1 id="contactTitle">Contact Us!</h1>
            <div id="contactContent" className="container">
                <div id="quote" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDmZFlFOHjze8FrBS5rQEbN69evF0vPPfBd5Rq6D0kE9N3Kg/viewform"><img className="icon" src="./assets/icons/rfq-icon.png" alt="quote-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left pt-0 pt-sm-4">Request a quote!</p>
                    </div>
                </div>
                <div id="email" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="mailto:zeesybake@gmail.com"><img className="icon" src="./assets/icons/em-icon.png" alt="email-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left pt-0 pt-sm-4">zeesybake@gmail.com</p>
                    </div>
                </div>
                <div id="facebook" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="https://www.facebook.com/ZeesyBake/"><img className="icon" src="./assets/icons/fb-icon.png" alt="facebook-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left pt-0 pt-sm-4">@ZeesyBake</p>
                    </div>
                </div>
                <div id="insta" className="row mx-auto">
                    <div className="socials col-12 col-sm-3 mx-auto">
                        <a href="https://www.instagram.com/zeesybake/"><img className="icon" src="./assets/icons/ig-icon.png" alt="instagram-icon" /></a>
                    </div>
                    <div className="description col-12 col-sm-9 mx-auto">
                        <p className="social text-center text-sm-left pt-0 pt-sm-4">@zeesybake</p>
                    </div>
                </div>
            </div>
            <div id="footer" className="container">
                <div id="madeby" className="row mx-auto">
                    <div className="col-2 mx-auto">
                        <a href="https://www.aarkitekkt.com"><img className="bjicon" src="./assets/icons/bj_logo_grey.png" alt="aarkitekkt-icon" /></a>
                    </div>
                    <div className="col-11 mx-auto">
                        <p className="">designed by <a href="https://www.aarkitekkt.com">aarkitekkt</a> | 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;