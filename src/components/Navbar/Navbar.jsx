import React from "react";
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import "./navbar.css";

const Navbar = ({ activeLink, setActiveLink }) => {
  return (
    <div className="navbar">
      <a
        href="/"
        className={activeLink === "/" ? "navbar_link active" : "navbar_link"}
        onClick={() => setActiveLink("/")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="about"
        className={
          activeLink === "about" ? "navbar_link active" : "navbar_link"
        }
        onClick={() => setActiveLink("about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="project"
        className={
          activeLink === "project" ? "navbar_link active" : "navbar_link"
        }
        onClick={() => setActiveLink("project")}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="skill"
        className={
          activeLink === "skill" ? "navbar_link active" : "navbar_link"
        }
        onClick={() => setActiveLink("skill")}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="contact"
        className={
          activeLink === "contact" ? "navbar_link active" : "navbar_link"
        }
        onClick={() => setActiveLink("contact")}
      >
        <AiOutlineMessage />
      </a>
    </div>
  );
};

export default Navbar;
