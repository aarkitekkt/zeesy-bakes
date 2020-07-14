import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function Flavor(props) {
    return (

        <Link to="flavors" smooth={true} duration={500} id="galleryButton" className="btn"><button onClick={props.onClick} className="m-2">{props.flavorName}</button></Link>
    )
}

export default Flavor;