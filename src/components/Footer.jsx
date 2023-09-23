import React from "react";
import "../styles/Footer.css";
import HTML from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import JS from "../images/js.svg";
import REACT from "../images/react.svg";
import REDUX from "../images/redux.svg";
import FIREBASE from "../images/firebase.svg";
import GIT from "../images/git.svg";
import FIGMA from "../images/figma.svg";

function Footer() {
  const data = "";
  return (
    <div className="footer">
      <ul className="footer__ul">
        <li className="footer__li">
          {" "}
          const <span className="heading__orange">getSkill</span> = ()
          {" =>"} {data}
        </li>
      </ul>
      <div className="footer__stack__container">
        <ul className="footer__stack-icons">
          <li>
            <img src={HTML} alt="html5" title="HTML5" width={35} />
          </li>
          <li>
            <img src={CSS3} alt="CSS3" title="CSS3" width={35} />
          </li>
          <li>
            <img src={JS} alt="javascript" title="Javascript" width={35} />
          </li>
          <li>
            <img src={REACT} alt="react" title="React" width={35} />
          </li>
          <li>
            <img src={REDUX} alt="redux" title="Redux" width={30} />
          </li>
          <li>
            <img src={FIREBASE} alt="firebase" title="FireBase" width={30} />
          </li>
          <li>
            <img src={GIT} alt="git" title="GitHub" width={30} />
          </li>
          <li>
            <img src={FIGMA} alt="git" title="Figma" width={20} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
