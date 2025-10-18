import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { BiMessageSquareDetail, BiBrain } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav aria-label="Main navigation">
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="Navigate to home section"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="Navigate to about section"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="Navigate to experience section"
      >
        <BiBrain />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        aria-label="Navigate to portfolio section"
      >
        <BiBookAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="Navigate to contact section"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
