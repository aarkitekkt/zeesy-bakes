import React, { useState } from "react";
import "./style.css";

function Modal() {

    const [modalState, setModalState] = useState("open");

    return (
        <div id="modal" className={modalState}>
            <div id="modalContent">
                <h3 id="closeBtn" onClick={() => setModalState("closed")}>×</h3>
                <div className="modalContentContainer">
                    <img id="modalLogo" src="./assets/images/logo_gold.png" alt="ZBlogo" />
                    <div id="modalTitle">
                        <h2 id="christmas" className="titleText">Christmas</h2>
                        <h2 className="titleText">Mini Boxes</h2>
                        <h2 className="titleText">$15</h2>
                    </div>
                    <p className="modalText">Each box contains 16 cupcakes with up to 4 flavors and are perfect gifts for friends, neighbors, or yourself!</p>
                    <p className="modalText">(You've earned it)</p>
                    <a id="orderButton" href="https://forms.gle/jMwsPkekkdH9ZtZ48">Order yours now!</a>
                </div>
            </div>
        </div >
    )
}

export default Modal;