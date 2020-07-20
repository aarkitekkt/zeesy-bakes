import React from 'react';
import "./style.css";

function Pricing() {
    return (
        <div className="pricing">
            <h1 id="pricingTitle">Pricing</h1>
            <div className="container">
                <div className="row mx-auto pb-5">
                    <div className="col-12 col-md-6">
                        <div id="cupcakePricing" className="priceList mx-auto">
                            <h3>Mini Cupcakes</h3>
                            <div id="oneFlavor" className="row mx-auto">
                                <h5 className="mx-auto pb-3">Choose one flavor from either list</h5>
                                <div className="col-6 border-right">
                                    <h5 className="border-bottom mx-3">$35</h5>
                                    <ul className="p-0">
                                        <li>Chocolate Chocolate</li>
                                        <li>Lemon</li>
                                        <li>Orange Cream</li>
                                        <li>Pina Colada</li>
                                        <li>Pink Lemonade</li>
                                        <li>Pumpkin</li>
                                        <li>Red Velvet</li>
                                        <li>Vanilla</li>
                                        <li>Salted Caramel</li>
                                    </ul>
                                </div>
                                <div className="col-6 border-left">
                                    <h5 className="border-bottom mx-3">$40</h5>
                                    <ul className="p-0">
                                        <li>Almond Joy</li>
                                        <li>Carrot Cake</li>
                                        <li>Chocolate Mint</li>
                                        <li>Cookies and Cream</li>
                                        <li>Hummingbird</li>
                                        <li>Maple Bacon</li>
                                        <li>Peanut Butter</li>
                                        <li>Raspberry Lemon</li>
                                        <li>Strawberry</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="twoFlavors" className="row mx-auto">
                                <h5 className="w-100 py-3">Choose two flavors from either list</h5>
                                <h5 className="w-100 border-bottom">$45</h5>
                                <div className="col-6 border-right">
                                    <ul className="p-0">
                                        <li>Almond Joy</li>
                                        <li>Chocolate Chocolate</li>
                                        <li>Chocolate Mint</li>
                                        <li>Cookies and Cream</li>
                                        <li>Peanut Butter</li>
                                        <li>Salted Caramel</li>
                                    </ul>
                                </div>
                                <div className="col-6 border-left">
                                    <ul className="p-0">
                                        <li>Lemon</li>
                                        <li>Orange Cream</li>
                                        <li>Pina Colada</li>
                                        <li>Pink Lemonade</li>
                                        <li>Raspberry Lemon</li>
                                        <li>Strawberry</li>
                                        <li>Vanilla</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div id="cakePricing" className="priceList mx-auto">
                            <h3>Cakes</h3>
                            <div id="basePrices" className="row mx-auto">
                                <h5 className="w-100 mx-auto pb-3">Base Prices</h5>
                                <div className="col-6 border-right">
                                    <h5 className="border-bottom mx-3">Single Tier</h5>
                                    <ul className="p-0">
                                        <li>4" - $25</li>
                                        <li>6" - $40</li>
                                        <li>8" - $55</li>
                                        <li>9" - $65</li>
                                        <li>10" - 80</li>
                                    </ul>
                                </div>
                                <div className="col-6 border-left">
                                    <h5 className="border-bottom mx-3">Multi Tier</h5>
                                    <ul className="p-0">
                                        <li>6/4" - $80</li>
                                        <li>8/6" - $110</li>
                                        <li>9/6" - $125</li>
                                        <li>8/6/4 - $160</li>
                                        <li>10/8/6" - $245</li>
                                        <li>12/9/6" - $275</li>
                                    </ul>
                                </div>
                            </div>
                            <div id="addOns" className="row mx-auto">
                                <div className="col-12">
                                    <h5 className="w-100 mx-auto pb-3">Additional Charges</h5>
                                    <ul className="p-0">
                                        <li>6/4" - $80</li>
                                        <li>8/6" - $110</li>
                                        <li>9/6" - $125</li>
                                        <li>8/6/4 - $160</li>
                                        <li>10/8/6" - $245</li>
                                        <li>12/9/6" - $275</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing;