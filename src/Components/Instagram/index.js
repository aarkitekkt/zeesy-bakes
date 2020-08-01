import React, { useEffect } from 'react';
import "./style.css";
import axios from "axios";

function Instagram() {

    var instagramQuery = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,username&access_token=" + process.env.REACT_APP_IG_TOKEN;

    useEffect(() => {
        console.log("get some pics!")
        getInstagramGallery();
    });

    function getInstagramGallery() {

        axios.get(instagramQuery)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="instagram">
            <h1 id="instagramTitle">instagram gallery</h1>
            <div id="instagramContent" className="container">
                <div className="row mx-auto">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 flex">
                        <div className="gram mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Instagram;