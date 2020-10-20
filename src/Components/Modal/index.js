import React, { useState } from "react";
import "./style.css";

function Modal() {

    const [modalState, setModalState] = useState("open");

    return (
        <div id="modal" className={modalState}>
            <div id="modalContent">
                <h1 id="closeBtn" onClick={() => setModalState("closed")}>×</h1>
                <h1>Buy Some Holiday Stuff!</h1>
                <a href="http://google.com">buy</a>
            </div>
        </div >
    )
}

export default Modal;