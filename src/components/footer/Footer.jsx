import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="text-4xl tracking-widest font-thin m-10">
        Daniel Schroter
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/danielschroter">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/daniel-schroter/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Credits to EGATOR Tutorials. See{" "}
          <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" target="_blank">
            source
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
