import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/daniel-schroter-thuem.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <p className="p-2">Hello I'm</p>
        <h1 className=" pb-4 text-4xl md:text-4xl tracking-widest  ">
          <b>DANIEL SCHROTER THÜM</b>
        </h1>
        <h2 className="font-thin">
           ML & AI Engineer | Co-Founder at{" "}
          <a
            href="https://promptic.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Promptic
          </a>
        </h2>
        <CTA></CTA>
        <div className="header__image-row">
          <div>{/* <HeaderSocials /> */}</div>

          <div className="me">
            <img
              src={ME}
              alt="A portrait of Daniel Schroter Thüm"
              title="Daniel Schroter Thüm"
              // width="600"
              // height="600"
              // loading="eager"
            />
          </div>
          <div className="scroll__down-div">
            {/* <a href="#contact" className="scroll__down">
              Scroll Down
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
