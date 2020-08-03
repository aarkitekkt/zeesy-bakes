import React, { useEffect, useState } from 'react';
import Gram from "../Gram/index.js";
import "./style.css";
import axios from "axios";


function Instagram() {

    // var imageSourceList = [];


    var instagramQuery = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=" + process.env.REACT_APP_IG_TOKEN;

    // when page loads, run function to get instagram image data
    useEffect(() => {
        getInstagramGallery();
    });

    const [srcState, setSrcState] = useState(null)

    // function to query instagram api and return image data
    function getInstagramGallery() {

        axios.get(instagramQuery)
            .then(res => {

                setSrcState(res.data.data[0].media_url);
                console.log(srcState);

                // console.log(res);

                // for (let i = 0; i < res.data.data.length; i++) {
                //     if (res.data.data[i].media_type === "IMAGE" && imageSourceList.length <= 11) {
                //         imageSourceList.push(res.data.data[i].media_url);
                //     }
                // }
            })
    }

    return (
        <div className="instagram">
            <h1 id="instagramTitle">instagram gallery</h1>
            <div id="instagramContent" className="container">
                <div className="row mx-auto">
                    < Gram
                        imgSource={srcState}
                    />
                </div>
            </div>
        </div>

    )
}

export default Instagram;