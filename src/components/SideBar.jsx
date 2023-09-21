import React from "react";
import "../styles/SideBar.css";
import HTML from "../images/html5.svg";
import CSS3 from "../images/css3.svg";
import JS from "../images/js.svg";
import REACT from "../images/react.svg";
import REDUX from "../images/redux.svg";
import FIREBASE from "../images/firebase.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <p>
        {"< "}
        <span className="sidebar__stacks">const </span>{" "}
        <span className="heading__orange">MyTechStack="view"</span>
        {" />"}
      </p>
      <div className="sidebar__stack__container">
        <ul className="sidebar__stack-icons">
          <li>
            <img src={HTML} alt="html5" width={60} />
          </li>
          <li>
            <img src={CSS3} alt="CSS3" width={60} />
          </li>
          <li>
            <img src={JS} alt="javascript" width={60} />
          </li>
          <li>
            <img src={REACT} alt="react" width={60} />
          </li>
          <li>
            <img src={REDUX} alt="redux" width={60} />
          </li>
          <li>
            <img src={FIREBASE} alt="firebase" width={60} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
