import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me-5.png";
import ME from "../../assets/me-bewerbung.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      {/* <div className="absolute inset-0 flex justify-center top-[-60px]">
        <div className="relative top-0 w-72 h-72 bg-gray-300 rounded-full left-50 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay"></div>
        <div className="relative top-40 rounded-full w-96 h-96 bg-slate-200 right-40 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
      </div> */}
      <div className="container header__container">
        <h5 className="p-2">Hello I'm</h5>
        <h1 className=" pb-4 text-4xl md:text-4xl tracking-widest font-thin ">
          DANIEL SCHROTER
        </h1>
        <h5 className="text-light">Data Scientist & AI Engineer</h5>
        <CTA></CTA>
        <div className="header__image-row">
          <div>{/* <HeaderSocials /> */}</div>

          <div className="me">
            {/* <img className="me-img" src={ME} alt="me" /> */}
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
