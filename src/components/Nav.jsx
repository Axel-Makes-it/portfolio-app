import React, { useState } from "react";
import "../styles/Nav.css";

function Nav({ activeSection, handleSectionClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle select change
  const handleSelectChange = (event) => {
    const selectedSection = event.target.value;
    handleSectionClick(selectedSection);
  };

  return (
    <div className="nav">
      <p className="nav__name">
        {"< "}
        <span className="name-with-space">AxelSantiago </span> portfolio="view"
        {" />"}
      </p>
      <div className="nav__list">
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <select
            value={activeSection}
            onChange={handleSelectChange}
            className={`mobile-menu-select ${isMobileMenuOpen ? "open" : ""}`}
          >
            <option value="hello">Hello</option>
            <option value="about-me">About me</option>
            <option value="projects">Projects</option>
            <option value="contact-me">Contact me</option>
          </select>
          <div
            className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`nav__menu__container ${isMobileMenuOpen ? "hidden" : ""}`}
        >
          <li
            title="Hello"
            className={`nav__menu ${activeSection === "hello" ? "active" : ""}`}
            onClick={() => handleSectionClick("hello")}
          >
            _hello
          </li>
          <li
            title="About me"
            className={`nav__menu ${
              activeSection === "about-me" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("about-me")}
          >
            _about-me
          </li>
          <li
            title="Projects"
            className={`nav__menu ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("projects")}
          >
            _projects
          </li>
        </ul>
        <p
          title="Contact me"
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
