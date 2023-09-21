import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <div className="nav">
      <p className="nav__name">
        {"< "}
        <span className="name-with-space">AxelSantiago</span>
        {" />"}
      </p>
      <ul className="nav__menu__container">
        <li className="nav__menu">_hello</li>
        <li className="nav__menu">_about-me</li>
        <li className="nav__menu" id="projects">
          _projects
        </li>
      </ul>
      <p className="nav__contact">_contact-me</p>
    </div>
  );
}

export default Nav;
