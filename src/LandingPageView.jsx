import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function LandingPageView() {
  return (
    <>
      <div className="relative inset-0 overflow-hidden ">
        {/* <div className="absolute top-0 w-72 h-72 bg-gray-300 rounded-full left-[-10vw] filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay"></div> */}
        {/* <div className="absolute top-[120vh] rounded-full w-72 h-72 bg-slate-200 left-[10vw]  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div> */}
        <div className="absolute top-7 rounded-full w-96 h-96 bg-slate-200 left-[30vw] filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-10 rounded-full w-96 h-96 bg-yellow-600/70 left-[40vw] mix-blend-screen  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        {/* <div className="absolute top-2/4 rounded-full w-96 h-96 bg-yellow-600/60 left-[40vw] mix-blend-screen  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div> */}
        <div className="absolute top-[240vh] rounded-full w-96 h-96 bg-yellow-600/60 left-[90%] mix-blend-screen  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-3/4 rounded-full w-96 h-96 bg-slate-200/60 left-[10vw] mix-blend-screen filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 rounded-full w-96 h-96 bg-slate-200 left-[20vw] mix-blend-screen filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/4 rounded-full w-96 h-96 bg-slate-200/60 left-[40vw] mix-blend-screen  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 rounded-full w-96 h-96 bg-slate-200 left-1/3 mix-blend-screen  filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div>

        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default LandingPageView;
