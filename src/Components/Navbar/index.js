import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div className="container-fluid bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                        <h3>logo</h3>
                    </div>

                    <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                        <ul className="nav pb-3 pt-2">
                            <li className="nav-item mx-2">
                                gallery
                    </li>
                            <li className="nav-item mx-2">
                                flavors
                    </li>
                            <li className="nav-item mx-2">
                                pricing
                    </li>
                            <li className="nav-item mx-2">
                                contact
                    </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;