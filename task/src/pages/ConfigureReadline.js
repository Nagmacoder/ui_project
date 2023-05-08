import React from "react";
import "./ConfigureReadline.css";
const ConfigureReadline = () => {
  const cards = [
    {
      img: "./images/Avatar.png",
      paraHead: " Job \n Interview",
      para: "  Do job Interview Scare you? Be  Industry Ready To Grab The Opportunity To Improve YOur chances To Get Job  offers with Our Industry Experts Guidence",
    },
    {
      img: "./images/Avatar.png",
      paraHead: " Public \n Speaking",
      para: "  Do job Interview Scare you? Be  Industry Ready To Grab The Opportunity To Improve YOur chances To Get Job  offers with Our Industry Experts Guidence",
    },
    {
      img: "./images/Avatar.png",
      paraHead: " Influencing  Skill",
      para: "  Do job Interview Scare you? Be  Industry Ready To Grab The Opportunity To Improve YOur chances To Get Job  offers with Our Industry Experts Guidence",
    },
    {
      img: "./images/Avatar.png",
      //   paraHead: 'Elevator {"\n"} Pitch',
      paraHead: "Elevator Pitch",
      para: "  Do job Interview Scare you? Be  Industry Ready To Grab The Opportunity To Improve YOur chances To Get Job  offers with Our Industry Experts Guidence",
    },
  ];
  return (
    <div id="ConfigureReadineContainer">
      <h1 style={{ color: "rgb(44, 118, 221)" }}>Configure Your Readiness</h1>
      <h2>
        Discover The Power of #Machinelearning And #AI with JRN <br /> Unlocking
        The Capabilities Of Advanced technologiesTo Provide You with A Range Of
        Services .{" "}
      </h2>

      <div id="cardContainer">
        {cards.map((data, i) => (
          <>
            <div className="card">
              <div>
                <img src={data.img} className="avatar" />
              </div>
              <div className="paraBox">
                <h4 className="paraHead">{data.paraHead}</h4>
                <p className="para">{data.para}</p>
              </div>
            </div>
          </>
        ))}

        {/* --------------------------------------- */}
      </div>
    </div>
  );
};

export default ConfigureReadline;
