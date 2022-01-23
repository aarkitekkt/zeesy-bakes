import React, { useState } from "react";
import "./style.css";

function Modal() {

    const [modalState, setModalState] = useState("open");

    return (
        <div id="modal" className={modalState}>
            <div id="modalContent">
                <h3 id="closeBtn" onClick={() => setModalState("closed")}>×</h3>
                <div className="modalContentContainer">
                    <img id="modalLogo" src="./assets/images/logo-08.png" alt="ZBlogo" />
                    <div id="modalTitle">
                        <div className="trim"></div>
                        <h2 id="christmas" className="titleText">We'll be right back!</h2>
                        <div className="trim"></div>
                    </div>
                    <h5 className="modalText">We will be temporarily closed through March while Elise takes her maternity leave.  We will reply to all cake and cupcake inquiries by the end of March.
                    </h5>
                    {/* <a id="orderButton" href="https://forms.gle/b95apENFBtpegeLP6">Order yours now!</a> */}
                </div>
            </div>
        </div >
    )
}

export default Modal;