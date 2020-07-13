import React, { useState } from 'react';
import "./style.css";
import Flavor from "../Flavor/index.js";
import flavorsList from "../../flavorsList.json"

function Flavors() {

    const [flavorState, setFlavorState] = useState({
        ID: "default",
        currentFlavor: "",
        description: "We offer a wide variety of cake and frosting flavors. Pick an option below to learn more!",
        image: "./assets/images/Flavors/flavors.png"
    });

    function showFlavor(id) {

        console.log("you clicked on " + id);

        var clickedFlavor = flavorsList.filter(flavor => flavor.ID === id);

        setFlavorState({
            ID: clickedFlavor[0].ID,
            currentFlavor: clickedFlavor[0].Flavor,
            description: clickedFlavor[0].Description,
            image: clickedFlavor[0].Image
        })

    }

    return (
        <div className="flavors">
            <h1 id="flavorsTitle" className="">Flavors</h1>
            <div className="container">
                <div id="selectedFlavor" className="row my-3 mx-auto">
                    <div className="col-12 col-md-8">
                        <div>
                            <h3 id="currentFlavor" className="py-3">{flavorState.currentFlavor}</h3>
                            <h5 id="description">{flavorState.description}</h5>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-0">
                        <img className="img-fluid rounded-lg p-0" src={flavorState.image} alt="cupcakeFlavors" />
                    </div>
                </div>
                <div id="flavorList" className="row mx-auto pb-3">
                    <div className="col-12">
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
        </div>
    )
}

export default Flavors;