import "./App.css";
import Header from "./components/Header/Header.jsx";
import Background from "./components/Background/Background.jsx";
import { NavLink, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skill from "./components/Skill/Skill.jsx";
import Project from "./components/Project/Project.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { useState } from "react";
function App() {
  const [activeLink, setActiveLink] = useState("");
  console.log(activeLink);
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;
