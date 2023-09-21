import React from "react";
import "../styles/Hello.css";
import ROCK1 from "../images/rock.svg";
import LAND from "../images/land.svg";
import CLOUD from "../images/cloud.svg";
import CLOUD2 from "../images/cloud2.svg";
import LAND1 from "../images/land1.svg";
import TUBE from "../images/tube.svg";
import ME1 from "../images/me1.png";
import LeviRock from "../images/lavitateRock.svg";
import COMP from "../images/computer.svg";

function Hello() {
  return (
    <div className="hello__container">
      {" "}
      <img id="rock1" src={ROCK1} alt="icon" />
      <img id="land" src={LAND} alt="icon" width={150} />
      <img id="cloud" src={CLOUD} alt="icon" width={350} />
      <img id="land1" src={LAND1} alt="icon" width={200} />
      <img id="tube" src={TUBE} alt="icon" width={50} />
      <img id="me1" src={ME1} alt="icon" width={80} />
      <img id="levitateRock" src={LeviRock} alt="icon" width={350} />
      <img id="cloud2" src={CLOUD2} alt="icon" width={250} />
      <img id="comp" src={COMP} alt="icon" width={320} />
      <div className="hello__left-bar">
        <div className="hello__text__container">
          <p className="hello__heading-3">Hi all. I am</p>
          <div className="typewriter">
            <h1>Axel Santiago</h1>
            <h2 className="skill">
              <span id="skill">{">"}</span> Front End React Developer
            </h2>
          </div>
          <div className="hello__comment">
            <ul className="hello__ul">
              <li>{"// welcome to my portfolio!"}</li>
              <li>{"// you can also see my projects on my Github page"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hello;
