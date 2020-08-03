import React from "react";
import "./style.css";

function Gram(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
            <img className="gram mx-auto p-2" src={props.imgSource} alt="zeesyBakeInstagram" />
        </div>
    )
}

export default Gram;

