import React from "react";
import "../styles/Hello.css";
import ROCK1 from "../images/rock.svg";

function Hello() {
  return (
    <div className="hello__container">
      <div className="hello__left-bar">
        <div className="hello__text__container">
          <p className="hello__heading-3">Hi all. I am</p>
          <div className="typewriter">
            <img id="rock1" src={ROCK1} alt="icon" />
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
