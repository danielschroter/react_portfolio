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
      {/* Global Seamless Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Multiple overlapping gradients for continuous effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,_var(--color-bg-variant)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_0%_20%,_rgba(77,181,255,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_40%,_var(--color-bg-variant)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_60%,_rgba(77,181,255,0.10)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,_var(--color-bg-variant)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,_rgba(77,181,255,0.08)_0%,_transparent_50%)]" />
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
      </div>

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
