import React from "react";
import "./style.css";

function Flavor(props) {
    return (
        <button id={props.ID} onClick={props.onClick} className="m-2">{props.flavorName}</button>
    )
}

export default Flavor;