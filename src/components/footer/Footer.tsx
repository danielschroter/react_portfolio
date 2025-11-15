import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const NAV_LINKS = [
  { href: "/#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Footer: React.FC = () => (
  <footer className="mt-24 border-t border-white/10 bg-[var(--color-card-bg)]/50 px-4 py-10 backdrop-blur">
    <div className="container  mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-white/70">
      <a href="/#" className="text-2xl font-light tracking-[0.3em] text-white">
        Daniel Schroter Thüm
      </a>
      {/* <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-wide">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="text-white/70 transition hover:text-[var(--color-secondary)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
      <div className="flex mb-20 gap-4 text-xl text-white">
        <a
          href="https://github.com/danielschroter"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[var(--color-secondary)]"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-schroter/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-[var(--color-secondary)]"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin />
        </a>
      </div>
    
    </div>
  </footer>
);

export default Footer;
