import React from 'react';
import "./style.css";

function About() {
    return (
        <div className="about">
            <h1 id="aboutTitle">About</h1>
            <div id="aboutContent" className="container px-0 pb-2">
                <div className="row mx-auto pb-3">
                    <div id="teamPics" className="col-12 col-sm-5 col-md-12 mb-3">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img className="pic img-fluid rounded-circle p-2 mb-3" src="./assets/images/team/elise.png" alt="zeese" />
                                <h3 className="m-0">Elise</h3>
                                <h5 className="mb-5">Lead Decorator</h5>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="pic rounded-circle p-2 mb-3" src="./assets/images/team/collin.png" alt="coco" />
                                <h3 className="m-0">Collin</h3>
                                <h5>Lead Baker</h5>
                            </div>
                        </div>
                    </div>
                    <div id="teamBio" className="col-12 col-sm-7 col-md-12">
                        <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum consequat purus, id gravida velit accumsan vitae. Donec pharetra rutrum justo, maximus vulputate tortor aliquam in. Ut neque mi, blandit sed felis id, congue luctus ligula. Sed vel erat dui. Donec tincidunt justo vitae leo egestas dapibus. Praesent sed elit nec enim scelerisque dictum consectetur vel risus. Aliquam at aliquet sem. Phasellus auctor dapibus enim. Sed faucibus rutrum metus. Morbi augue est, imperdiet eget pretium eu, tincidunt vel risus. Nunc iaculis elit in enim rhoncus, a auctor magna commodo. Phasellus ac dui vel metus lacinia auctor non tempus ligula. Aliquam at arcu a elit dapibus suscipit. Vestibulum ac turpis pharetra, mattis justo sollicitudin, facilisis nibh. Fusce eget neque non sapien faucibus dignissim. Ut auctor rutrum ullamcorper.</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#EFEEEE" fill-opacity="1" d="M0,64L6.2,58.7C12.3,53,25,43,37,58.7C49.2,75,62,117,74,117.3C86.2,117,98,75,111,90.7C123.1,107,135,181,148,197.3C160,213,172,171,185,176C196.9,181,209,235,222,218.7C233.8,203,246,117,258,80C270.8,43,283,53,295,58.7C307.7,64,320,64,332,101.3C344.6,139,357,213,369,224C381.5,235,394,181,406,144C418.5,107,431,85,443,90.7C455.4,96,468,128,480,122.7C492.3,117,505,75,517,69.3C529.2,64,542,96,554,112C566.2,128,578,128,591,133.3C603.1,139,615,149,628,144C640,139,652,117,665,133.3C676.9,149,689,203,702,229.3C713.8,256,726,256,738,224C750.8,192,763,128,775,96C787.7,64,800,64,812,64C824.6,64,837,64,849,106.7C861.5,149,874,235,886,229.3C898.5,224,911,128,923,128C935.4,128,948,224,960,250.7C972.3,277,985,235,997,197.3C1009.2,160,1022,128,1034,112C1046.2,96,1058,96,1071,112C1083.1,128,1095,160,1108,192C1120,224,1132,256,1145,240C1156.9,224,1169,160,1182,133.3C1193.8,107,1206,117,1218,106.7C1230.8,96,1243,64,1255,69.3C1267.7,75,1280,117,1292,160C1304.6,203,1317,245,1329,224C1341.5,203,1354,117,1366,85.3C1378.5,53,1391,75,1403,101.3C1415.4,128,1428,160,1434,176L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>

        </div>
    )
}

export default About;