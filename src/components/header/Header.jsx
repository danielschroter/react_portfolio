import React from "react";
import CTA from "./CTA";
import "./header.css";
// import ME from "../../assets/me-5.png";

const Header = () => {
  return (
    <div>
      <div className="container header__container">
        <h5 className="p-2">Hello I'm</h5>
        <h1 className=" pb-4 text-4xl md:text-4xl tracking-widest  ">
          DANIEL SCHROTER THÜM
        </h1>
        <h5 className="text-light">
          Data Scientist & AI Engineer | Co-Founder at{" "}
          <a href="https://promptic.eu">Promptic</a>
        </h5>
        <CTA></CTA>
        <div className="header__image-row">
          <div>{/* <HeaderSocials /> */}</div>

          <div className="me">
            {/* <div className="me-img"></div> */}
            {/* <img className="me-img" src={ME} alt="me" /> */}
          </div>
          <div className="scroll__down-div">
            {/* <a href="#contact" className="scroll__down">
              Scroll Down
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
