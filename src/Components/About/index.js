import React from 'react';
import "./style.css";

function About() {
    return (
        <div className="about">
            <h1 id="aboutTitle">About</h1>
            <div id="aboutContent" className="container px-0 pb-5">
                <div className="row mx-auto">
                    <div id="teamPics" className="col-12 col-sm-5 col-lg-3 mb-5">
                        <img className="pic img-fluid rounded-circle p-2 m-2" src="./assets/images/team/elise.png" alt="zeese" />
                        <h3 className="m-0">Elise</h3>
                        <h5>Lead Decorator</h5>
                        <img className="pic rounded-circle p-2 m-2" src="./assets/images/team/collin.png" alt="coco" />
                        <h3 className="m-0">Collin</h3>
                        <h5>Lead Baker</h5>
                    </div>
                    <div id="teamBio" className="col-12 col-sm-7 col-lg-9">
                        <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum consequat purus, id gravida velit accumsan vitae. Donec pharetra rutrum justo, maximus vulputate tortor aliquam in. Ut neque mi, blandit sed felis id, congue luctus ligula. Sed vel erat dui. Donec tincidunt justo vitae leo egestas dapibus. Praesent sed elit nec enim scelerisque dictum consectetur vel risus. Aliquam at aliquet sem. Phasellus auctor dapibus enim. Sed faucibus rutrum metus. Morbi augue est, imperdiet eget pretium eu, tincidunt vel risus. Nunc iaculis elit in enim rhoncus, a auctor magna commodo. Phasellus ac dui vel metus lacinia auctor non tempus ligula. Aliquam at arcu a elit dapibus suscipit. Vestibulum ac turpis pharetra, mattis justo sollicitudin, facilisis nibh. Fusce eget neque non sapien faucibus dignissim. Ut auctor rutrum ullamcorper.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;