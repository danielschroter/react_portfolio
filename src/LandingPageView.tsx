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
import noiseTexture from "./assets/noise.webp";

const LandingPageView: React.FC = () => (
  <>
    <a href="#about" className="skip-to-content">
      Skip to content
    </a>
    <div className="relative inset-0 isolate overflow-hidden">
      {/* 🎨 Mesh Gradient Style (Trendy 2025) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        
        {/* Multi-point mesh gradient */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(77,181,255,0.2) 0%, transparent 50%),
              radial-gradient(at 100% 0%, rgba(238,160,34,0.15) 0%, transparent 50%),
              radial-gradient(at 100% 100%, rgba(77,181,255,0.18) 0%, transparent 50%),
              radial-gradient(at 0% 100%, rgba(238,160,34,0.12) 0%, transparent 50%),
              radial-gradient(at 50% 50%, rgba(77,181,255,0.1) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url(${noiseTexture})`,
            backgroundSize: '15%',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
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
