import React from "react";

function Flavor(props) {
    return (
        <button id={props.ID} onClick={props.onClick} className="btn m-2">{props.flavorName}</button>
    )
}

export default Flavor;