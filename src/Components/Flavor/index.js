import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function Flavor(props) {
    return (

        <Link to="flavorsContent" smooth={true} duration={500} id="galleryButton" className="btn p-0 m-2"><button onClick={props.onClick} className="">{props.flavorName}</button></Link>
    )
}

export default Flavor;