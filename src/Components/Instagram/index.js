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
            <h1 id="instagramTitle">instagram gallery</h1>
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
            </div>
        </div>

    )
}

export default Instagram;