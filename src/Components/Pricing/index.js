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
                            <h3>48 Mini Cupcakes</h3>
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
                                        <li>10" - $80</li>
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
                                <h5 className="w-100 mx-auto pb-3">Additional Charges</h5>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Extra Decorations (Fondant, Piping, Etc.)</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">Subject to design</p>
                                    </div>
                                </div>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Delivery (Salt Lake and Utah Counties)</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">$15</p>
                                    </div>
                                </div>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Cake Topper</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">$5-15</p>
                                    </div>
                                </div>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Macarons (1 dozen)</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">$20</p>
                                    </div>
                                </div>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Wedding Cake Testing</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">$20</p>
                                    </div>
                                </div>
                                <div className="row mx-auto w-100">
                                    <div className="col-9">
                                        <p className="text-left">Cupcake Add-on(2 dozen mini cupcakes)</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="text-right">$20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 37.73"><path fill="#bcd4c6" fillOpacity="1" d="M1828.57,29c-17.82,0-34-4.86-45.71-12.73C1771.11,24.14,1755,29,1737.14,29s-34-4.86-45.71-12.73C1679.69,24.14,1663.54,29,1645.71,29s-34-4.86-45.71-12.73C1588.26,24.14,1572.11,29,1554.29,29s-34-4.86-45.72-12.73C1496.83,24.14,1480.68,29,1462.86,29s-34-4.86-45.72-12.73C1405.4,24.14,1389.25,29,1371.43,29s-34-4.86-45.72-12.73C1314,24.14,1297.83,29,1280,29s-34-4.86-45.71-12.73C1222.54,24.14,1206.4,29,1188.57,29s-34-4.86-45.71-12.73C1131.11,24.14,1115,29,1097.14,29s-34-4.86-45.71-12.73C1039.69,24.14,1023.54,29,1005.71,29s-34-4.86-45.71-12.73C948.26,24.14,932.11,29,914.29,29s-34-4.86-45.72-12.73C856.83,24.14,840.68,29,822.86,29s-34-4.86-45.72-12.73C765.4,24.14,749.25,29,731.43,29s-34-4.86-45.72-12.73C674,24.14,657.83,29,640,29s-34-4.86-45.71-12.73C582.54,24.14,566.4,29,548.57,29s-34-4.86-45.71-12.73C491.11,24.14,475,29,457.14,29s-34-4.86-45.71-12.73C399.69,24.14,383.54,29,365.71,29s-34-4.86-45.71-12.73C308.26,24.14,292.11,29,274.29,29s-34-4.86-45.72-12.73C216.83,24.14,200.68,29,182.86,29s-34-4.86-45.72-12.73C125.4,24.14,109.25,29,91.43,29s-34-4.86-45.72-12.73C34,24.14,17.83,29,0,29V54H1920V29c-17.83,0-34-4.86-45.71-12.73C1862.54,24.14,1846.4,29,1828.57,29Z" transform="translate(0 -16.27)" /></svg>
        </div>
    )
}

export default Pricing;