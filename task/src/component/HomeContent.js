import React from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <>
      <div id="homeContainer">
        <div id="homeContentLeft">
          <div id="typographyBox">
            <h1 id="heading1" style={{ fontFamily: "sans-serif" }}>
              Shaping Skills
              <br />{" "}
              <div style={{ color: "rgb(138 58 128)" }}>
                {" "}
                For Brigter Future
              </div>
            </h1>
            <h4>Powered by AI</h4>

            <h2>
              DEVELOPED BY RENOWNED <br /> GLOBAL EDUCATOR TEAM
            </h2>
            <h2 style={{ color: "rgb(44, 118, 221)" }}>WITH LOVE FROM AI</h2>

            <br />
            <button id="trybtn">Try Now</button>
          </div>
        </div>
        <div id="homeContentRight">
          {" "}
          <img
            className="contentImage homeContentRight"
            src="./images/image1.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
