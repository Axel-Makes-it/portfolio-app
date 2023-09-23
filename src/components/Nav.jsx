import React from "react";
import "../styles/Nav.css";

function Nav({ activeSection, handleSectionClick }) {
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
            onClick={() => handleSectionClick("hello")}
          >
            _hello
          </li>
          <li
            className={`nav__menu ${
              activeSection === "about-me" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("about-me")}
          >
            _about-me
          </li>
          <li
            className={`nav__menu ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("projects")}
          >
            _projects
          </li>
        </ul>
        <p
          className={`nav__contact ${
            activeSection === "contact-me" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("contact-me")}
        >
          _contact-me
        </p>
      </div>
    </div>
  );
}

export default Nav;
