import React from "react";
import "./header.css";
import avatar from "../../assets/images/z5528464457675_94ff4644b10d9afb931bd0806753b896.jpg";
import Button from "../Button/Button";
import CV from "../../assets/CV-VanThienTung.pdf";
import logo from "../../assets/images/LOGO.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  return (
    <section className="main_section header" id="/">
      <div className="header_info">
        <div className="header_info-avatar">
          <img src={avatar} alt="avatar me" />
        </div>
        <div className="header_info-button">
          <Button
            btnStyle="outline"
            btnText="Download CV"
            btnLink={CV}
            download
          />
          <Button btnStyle="primary" btnText="Talk Me" btnLink="#contact" />
        </div>
      </div>
      <div className="header_welcome">
        <span>
          Hello I'm a <br />
          FrontEnd Developer
        </span>
        <div className="header_name">
          <span style={{ "--i": "1" }} className="letter">
            V
          </span>
          <span style={{ "--i": "2" }} className="letter">
            A
          </span>
          <span style={{ "--i": "3" }} className="letter">
            N
          </span>
          <span> </span>
          <span style={{ "--i": "4" }} className="letter">
            T
          </span>
          <span style={{ "--i": "5" }} className="letter">
            H
          </span>
          <span style={{ "--i": "6" }} className="letter">
            I
          </span>

          <span style={{ "--i": "7" }} className="letter">
            E
          </span>
          <span style={{ "--i": "8" }} className="letter">
            N
          </span>
          <span> </span>
          <span style={{ "--i": "9" }} className="letter">
            T
          </span>
          <span style={{ "--i": "10" }} className="letter">
            U
          </span>
          <span style={{ "--i": "11" }} className="letter">
            N
          </span>
          <span style={{ "--i": "12" }} className="letter">
            G
          </span>
        </div>
        <div className="header_welcome-quote">What ???</div>
      </div>
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_socials">
        <a
          href="https://www.linkedin.com/in/t%C3%B9ng-v%C4%83n-thi%C3%AAn-78b03926a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.facebook.com/tungthienvan57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://github.com/TungVan57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>

      {/* Sub */}

      <div className="header_frame">
        <div></div>
        <div></div>
      </div>

      <div className="header_scrolldown">
        <a href="#footer">ScrollDown</a>
      </div>
    </section>
  );
};

export default Header;
