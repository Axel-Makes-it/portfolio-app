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
import ROCK3 from "../images/rock3.svg";
import HTML from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import JS from "../images/js.svg";
import REACT from "../images/react.svg";

function Hello() {
  return (
    <section className="hello__container">
      <img id="rock1" src={ROCK1} alt="icon" width={50} />
      <img id="land" src={LAND} alt="icon" width={70} />
      <img id="cloud" src={CLOUD} alt="icon" width={350} />
      <img id="land1" src={LAND1} alt="icon" width={200} />
      <img id="tube" src={TUBE} alt="icon" width={50} />
      <img id="me1" src={ME1} alt="icon" width={150} />
      <img id="levitateRock" src={LeviRock} alt="icon" width={350} />
      <img id="cloud2" src={CLOUD2} alt="icon" width={250} />
      <img id="rock3" src={ROCK3} alt="icon" width={150} />
      <img id="comp5" src={COMP} alt="icon" width={60} />
      <img id="htmlIcon" src={HTML} alt="html5" title="HTML5" width={35} />
      <img id="cssIcon" src={CSS3} alt="CSS3" title="CSS3" width={35} />
      <img id="jsIcon" src={JS} alt="JS" title="JS" width={35} />
      <img id="reactIcon" src={REACT} alt="REACT" title="REACT" width={35} />
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
              <li>{"// i can turn ui/ux design into code!"}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hello;
