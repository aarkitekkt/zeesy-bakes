import React from "react";
import "./style.css";

function Gram(props) {
    return (
        <div className="col-6 col-md-4 col-lg-3 p-0">
            <img className="gram mx-auto" src={props.imgSource} alt="zeesyBakeInstagram" />
        </div>
    )
}

export default Gram;

