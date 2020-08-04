import React, { useEffect, useState } from 'react';
import Gram from "../Gram/index.js";
import "./style.css";
import axios from "axios";


function Instagram() {

    var imageSourceList = [];


    var instagramQuery = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=" + process.env.REACT_APP_IG_TOKEN;

    // when page loads, run function to get instagram image data
    useEffect(() => {
        getInstagramGallery();
    }, []);

    const [srcState, setSrcState] = useState([]);

    // function to query instagram api and return image data
    function getInstagramGallery() {

        axios.get(instagramQuery)
            .then(res => {

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
            <div id="instagramContent" className="container">
                <div className="row mx-auto">
                    {
                        srcState.map(imgSrc => (
                            < Gram
                                imgSource={imgSrc}
                            />
                        ))
                    }
                </div>
                <div id="insta" className="row mx-auto pt-3">
                    <div className="gallerySocials col-12 mx-auto">
                        <a href="https://www.instagram.com/zeesybake/"><img className="icon" src="./assets/icons/ig-icon.png" alt="instagram-icon" /></a>
                    </div>
                    <div className="description col-12 mx-auto">
                        <p className="social text-center pt-0 pt-sm-4">Follow us on instagram <a href="https://www.instagram.com/zeesybake/">@zeesybake</a> to see more of our work!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Instagram;