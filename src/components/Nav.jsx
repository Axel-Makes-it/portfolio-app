import React from "react";
import "../styles/Nav.css";

function Nav({ activeSection, onSectionClick }) {
  return (
    <div className="nav">
      <p className="nav__name">
        {"< "}
        <span className="name-with-space">AxelSantiago </span> portfolio="view"
        {" />"}
      </p>
      <div className="nav__list">
        <ul className="nav__menu__container">
          <li
            className={`nav__menu ${activeSection === "hello" ? "active" : ""}`}
            onClick={() => onSectionClick("hello")}
          >
            _hello
          </li>
          <li
            className={`nav__menu ${
              activeSection === "about-me" ? "active" : ""
            }`}
            onClick={() => onSectionClick("about-me")}
          >
            _about-me
          </li>
          <li
            className={`nav__menu ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => onSectionClick("projects")}
          >
            _projects
          </li>
        </ul>
        <p className="nav__contact">_contact-me</p>
      </div>
    </div>
  );
}

export default Nav;
