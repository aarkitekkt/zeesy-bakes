import React, { useEffect, useState } from 'react';
import Gram from "../Gram/index.js";
import "./style.css";
import axios from "axios";


function Instagram() {

    var imageSourceList = [];


    var instagramQuery = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=" + process.env.REACT_APP_IG_TOKEN;

    // When page loads, run function to get instagram image data.
    useEffect(() => {
        getInstagramGallery();
    }, []);

    const [srcState, setSrcState] = useState([]);

    // Function to query instagram api and return image data.
    function getInstagramGallery() {

        axios.get(instagramQuery)
            .then(res => {
                // Loop through returned data from instagram API and push only media type "IMAGE" to the gallery array and stop when 12 images are in array.

                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].media_type === "IMAGE" && imageSourceList.length <= 11) {
                        imageSourceList.push(res.data.data[i].media_url);
                    }
                }

                return imageSourceList;
            })
            .then(imageSourceList => {
                setSrcState(imageSourceList);
                console.log(srcState);
            })
    }

    return (
        <div className="instagram">
            <h1 id="instagramTitle">Gallery</h1>
            <div id="instagramContent" className="container p-0">
                <div className="row mx-auto">
                    {
                        srcState.map(imgSrc => (
                            < Gram
                                imgSource={imgSrc}
                            />
                        ))
                    }
                </div>
            </div>
            <div id="zeesyMakesContent" className="container p-0 mt-5">
                <h3>We make custom cake toppers too!</h3>
                <h5>Starting at $15</h5>
                <div className="row mx-auto">
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper1.png" alt="zeesyMakes1" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper2.png" alt="zeesyMakes1" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper3.png" alt="zeesyMakes1" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper4.png" alt="zeesyMakes1" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper5.png" alt="zeesyMakes1" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 p-0">
                        <img className="gram mx-auto" src="./assets/images/Toppers/topper6.png" alt="zeesyMakes1" />
                    </div>
                </div>

            </div>
            <div id="followUs" className="container p-0 mt-5">
                <h5 className="mt-5">Follow us on instagram to see more of our work!</h5>
                <div id="insta" className="row mx-auto pb-4">
                    <div className="col-12 col-md-6">
                        <div className="row mx-auto">
                            <div className="col-12">
                                <a href="https://www.instagram.com/zeesybake/"><img className="icon" src="./assets/icons/ig-icon.png" alt="instagram-icon" /></a>
                            </div>
                            <div className="col-12">
                                <a href="https://www.instagram.com/zeesybake/"><h5>@zeesybake</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row mx-auto">
                            <div className="col-12">
                                <a href="https://www.instagram.com/zeesymake/"><img className="icon" src="./assets/icons/ig-icon.png" alt="instagram-icon" /></a>
                            </div>
                            <div className="col-12">
                                <a href="https://www.instagram.com/zeesymake/"><h5>@zeesymake</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frostingContainer">
                <svg className="frosting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 181"><path fill="#b9c6cb" fillOpacity="1" d="M1873.41,34.1c-17.16-20.88-40.72,11.76-42.6,32.54-1.16,14.14,1.53,29,1.74,43.23,1.56,17.52-17.3,19.81-19.67,3.36-.88-6-.64-12.46-.46-18.7.24-8.74,1.47-17.49,1.2-26.17-.53-23.44-28.2-34.66-45.48-20.67-9.15,5.16-21.71,15.25-29.06,1.92-19.47-38-27.53-2.58-46.26-11-9.76-4.48-17.62-1-24.12,10.81-4.81,8.72-11.46,8.05-15-1.89-3.68-10.2-9.46-15.41-16.42-19-5-3.2-10.79-4.52-15.51-8.36-.09,6.83-9.35,6.92-15.55,5.77-12.6-1.42-14,4.81-10.4,13.08,2.84,4.82-9.91,11.27-11.88,5.93-1.4-6.7.47-13.68-1.11-20.36-.81-6.15-24.17-12.18-29.37-2.54-1.29,9.1-2.59,18.21-3.09,27.32,1.55,10.65,5.08,21.57,5.66,32.46-.36,5.67-12.87,9.11-15,3.68-1.39-2.85-2.69-6.08-1.54-8.85,6.34-16.1,3-32.77,2.12-49.35-1.22-5.17-5-10-12-8.19-6.7,1.07-1.59,5.42-5.86,8-15.17,2.56-2.65-8-13.19-9.34-10.63-1.89-15.58,12.52-9.51,19.79,4.36,9.27-19.39,8.17-11.62-1.41,4.63-6-3.71-10.55-7.71-14.37-12.72-8.09-31.25,3.12-45.11-2.44-20-7.88-13.22,85-11.32,96.66,1.08,7.69,12,23.52-2.68,24.26-6.07.07-11.52-2.06-11.69-4.95,3.92-12.42,2.52-25.27,2.32-38.12-1.86-16.58,6.08-69.49-4.25-77.56-3.19-3.08-18.13-12.79-19.83-4.44.17,3.49,2.83,7.66-.92,10.3-2,1.05-8.57,2.13-8.9-1.86.44-2.92,4.54-7.22-1.81-6.27-3.38,13.46-8.45,26.63-3.48,40.32.46,5-15.76,5.85-15.16.17,0-5.61,9.41-25.81-3.38-21.06-6,3.54-10.29-.88-16.42-1.33-10.23,35.49-4.25,74.23-6.11,111-.69,10.93,6.26,21.22,5,32.28-.26,7-16.52,7.86-20.29,3.66-9.14-6.37-2.54-17.34-2.68-26.3q5.67-55.09,9.44-110.37c-1.5-17.14-1.29-27.49-20.84-15.59-16,7.23-28.12-17.72-28.28,13.88-.62,5.54,2.11,11.61-6.92,12.26-4.18.22-8.85-1.31-9.28-4-3.15-10.29,8.24-19.74.07-29.16-6.63-11.84-30.9,2-28.63,12.61,1.15,11.07,2.39,22.14,3.33,33.21.43,6-2.75,10.26-10.28,9.21-4.05-.42-5.29-2.16-5.07-4.08,2-14,7-28.12,3.25-42.2-24.3,9.28-26.08,5.11-33.51,33.75-3,7-8.78,8.26-11.8,1.85-18-36-48.86-6.22-49.15,24-1.31,10.58-1.42,21.1,1,31.71.9,4,.15,9.74-1.27,13.59-3.16,8.6-11.4,8.26-14.22-.53a45.22,45.22,0,0,1-1.6-14.32c.88-13.28,6.88-45.48-12.16-43.63-4.21.6-7.52-2-9.49-7.36-2.91-7.88-5.59-15.93-8.23-24-1.73-5.3-2.66-11.57-8-11.55C1055.05,32.59,1060,76,1045.85,45c-12.56-25.44-24,16.4-36-.09-8.8-15.66-18.16-.34-26.09,7.05-8.9,10.08-17.88-3.65-26.88-5.81-21.41-7.34-17.47,29.07-19.71,42.91-1.75,14.4-18,9.83-16.55-2.88.41-14.37-2-27.35-8.21-38.46C906,33,889.6,28.18,885.38,49.45c-.94,10.67-2.78,33-16,21.68-21.21-20.46-15.41,16.2-12.77,28.46,3.3,10.86,3.2,26.45-6.34,32.42-10.24,7.08-20-8.09-18-18.36,4-24.69,14.32-67.67-13.42-80.29-3.51-1.58-6.64-.1-9.28,4-4.6,8-9.41,5.7-14.48.25C774,14.47,776,76,742.94,49.37c-9.71-7.61-20.07-28.29-33.79-16.95-10.35,7.86-19.56,18.21-21.64,36.3-1.16,14.13,1.53,29,1.74,43.22,1.56,17.52-17.3,19.81-19.67,3.36-4.39-20.49,9.92-51.13-9.61-65.4-20.26-15.47-32.62.91-51.45,8-7.64,3.51-13.28-6.32-16.55-12.75-15.15-26.79-26.6,3.52-42.45-4.47-23.76-12.28-26.22,35.56-39.16,8.92-4.62-12.84-12.22-17.2-22-22C483.69,25,470.71,20.5,468.65,24c-6.25,14.86,12.27,35.91-1.72,35.17-7.31.51-11.76-1.09-11.59-7.18,1.05-8.64,2.45-17.27,3.75-25.9.68-4.5-3.28-8.24-12.29-11.3-10-3.4-14.27-3.09-20,1.46-11.8,8.39,14.56,25.82-10.39,25.85-5.85-.22-7-2-7.47-3.65.15-33.47-12.15-10.72-32.27-16.72C359.73,15.14,354.57,15,353.12,33.9c.34,27.88-1.36,57.66,3.65,86.06.76,5.13,2.26,10.25,2.33,15.37-2.06,11.95-25.1,14.92-28.26,2.28-2.38-9.48,9.14-16.5,9.16-24.9,2.26-28.25,5.7-56.27-1.38-84.47-.16-.78-1.33-1.54-2-2.31-6.83.33-11.7,3.8-18.53,1-13.16-4-5,10.54-3.82,16.42.65,4.49-17.72,3.7-17.11-.14,2.42-6.29,3.92-12.38.66-18.64-21.92,19.39-30.56-1.1-40.12,39.13-3,6.95-8.78,8.26-11.8,1.85-18-36-48.87-6.21-49.16,24-1.3,10.58-1.42,21.1,1,31.72.89,4,.14,9.73-1.27,13.58-3.17,8.6-11.4,8.26-14.22-.53-3.63-12-.08-25.28.18-37.6C181.55,64.68,164.73,85.43,159,69c-4-6.74-8.82-37-16.21-35.56-18.33-2.69-13.42,40.72-27.52,9.68-12.3-25.38-24.36,16.42-36-.09-8.87-15.66-18.07-.34-26.1,7-8.85,10.08-17.94-3.64-26.87-5.8C-2.85,36,16.32,91.94,0,96.1V194H1920V38.32C1906.49,65.86,1886.38,50.87,1873.41,34.1Z" transform="translate(0 -11.87]]])" /></svg>
            </div>
        </div>

    )
}

export default Instagram;