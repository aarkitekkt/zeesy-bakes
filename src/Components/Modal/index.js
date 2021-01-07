import React, { useState } from "react";
import "./style.css";

function Modal() {

    const [modalState, setModalState] = useState("open");

    return (
        <div id="modal" className={modalState}>
            <div id="modalContent">
                <h3 id="closeBtn" onClick={() => setModalState("closed")}>×</h3>
                <div className="modalContentContainer">
                    <img id="modalLogo" src="./assets/images/logo_burgundy-03.png" alt="ZBlogo" />
                    <div id="modalTitle">
                        <div className="trim"></div>
                        <h2 id="christmas" className="titleText">Valentine's Day</h2>
                        <h2 className="titleText">Treat Boxes</h2>
                        <div className="trim"></div>
                    </div>
                    <p className="modalText">Three treat box varieties with customizable flavor options.</p>
                    <p className="modalText">Starting at $5</p>
                    <a id="orderButton" href="https://forms.gle/b95apENFBtpegeLP6">Order yours now!</a>
                </div>
            </div>
        </div >
    )
}

export default Modal;