import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Highlights from "./components/highlights/Highlights";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

function LandingPageView() {
  return (
    <>
      <a href="#about" className="skip-to-content">
        Skip to content
      </a>
      <div className="relative inset-0 overflow-hidden isolate">
        <div className="absolute top-7 rounded-full w-96 h-96 bg-slate-200 left-[30vw] filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-10 rounded-full w-96 h-96 bg-yellow-600/70 left-[40vw]   filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[240vh] rounded-full w-96 h-96 bg-yellow-600/60 left-[90%]  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 rounded-full w-96 h-96 bg-slate-200/60 left-[10vw]  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 rounded-full w-96 h-96 bg-slate-200 left-[20vw]  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/4 rounded-full w-96 h-96 bg-slate-200/60 left-[40vw]   filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 rounded-full w-96 h-96 bg-slate-200 left-1/3   filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>

        <Header />
        <Nav />
        <main>
          <About />
          <Highlights />
          {/* <Services></Services> */}
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LandingPageView;
