import React, { useState } from 'react';
import "./style.css";
import Flavor from "../Flavor";
import flavorsList from "../../flavorsList.json"

function Flavors() {

    const [flavorState, setFlavorState] = useState({ ID: "default", currentFlavor: "Flavors", description: "select a flavor to learn more" });

    function showFlavor(id) {

        console.log("you clicked on " + id);

        var clickedFlavor = flavorsList.filter(flavor => flavor.ID === id);

        setFlavorState({ ID: clickedFlavor[0].ID, currentFlavor: clickedFlavor[0].Flavor, description: clickedFlavor[0].Description })

    }

    return (
        <div className="flavors">
            <div id="flavorsContent">
                <div id="flavorsTitle">
                    <h1>{flavorState.currentFlavor}</h1>
                    <h5>{flavorState.description}</h5>
                    {
                        flavorsList.map(flavor => (
                            < Flavor
                                flavorName={flavor.Flavor}
                                ID={flavor.ID}
                                onClick={() => showFlavor(flavor.ID)}
                            />
                        ))

                    }

                </div>
            </div>
        </div>
    )
}

export default Flavors;