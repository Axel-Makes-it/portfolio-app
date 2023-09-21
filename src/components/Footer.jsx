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
          function <span className="heading__orange">getSkill</span> = ()
          {" =>"} {data}
        </li>
      </ul>
      <div className="footer__stack__container">
        <ul className="footer__stack-icons">
          <li>
            <img src={HTML} alt="html5" width={50} />
          </li>
          <li>
            <img src={CSS3} alt="CSS3" width={50} />
          </li>
          <li>
            <img src={JS} alt="javascript" width={50} />
          </li>
          <li>
            <img src={REACT} alt="react" width={50} />
          </li>
          <li>
            <img src={REDUX} alt="redux" width={50} />
          </li>
          <li>
            <img src={FIREBASE} alt="firebase" width={40} />
          </li>
          <li>
            <img src={GIT} alt="git" width={40} />
          </li>
          <li>
            <img src={FIGMA} alt="git" width={30} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
