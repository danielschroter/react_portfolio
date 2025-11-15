import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Highlights from "./components/highlights/Highlights";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";

const LandingPageView: React.FC = () => (
  <>
    <a href="#about" className="skip-to-content">
      Skip to content
    </a>
    <div className="relative inset-0 isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-7 left-[30vw] h-96 w-96 rounded-full bg-slate-200 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-[40vw] h-96 w-96 rounded-full bg-yellow-600/70 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[240vh] left-[90%] h-96 w-96 rounded-full bg-yellow-600/60 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-3/4 left-[10vw] h-96 w-96 rounded-full bg-slate-200/60 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-[20vw] h-96 w-96 rounded-full bg-slate-200 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2/4 left-[40vw] h-96 w-96 rounded-full bg-slate-200/60 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-1/3 h-96 w-96 rounded-full bg-slate-200 filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"
      ></div>

      <Header />
      <Nav />
      <ScrollIndicator />
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

export default LandingPageView;
