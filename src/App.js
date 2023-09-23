import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hello from "./components/Hello";
import Projects from "./components/Projects";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  const [activeSection, setActiveSection] = useState("hello");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Nav
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />

      {activeSection === "hello" && <Hello />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "about-me" && <AboutMe />}
      {activeSection === "contact-me" && <ContactMe />}

      <Footer />
    </div>
  );
}

export default App;
