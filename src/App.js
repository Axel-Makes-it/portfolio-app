import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hello from "./components/Hello";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("hello");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Nav activeSection={activeSection} onSectionClick={handleSectionClick} />

      {activeSection === "hello" && <Hello />}
      {activeSection === "projects" && <Projects />}

      <Footer />
    </div>
  );
}

export default App;
