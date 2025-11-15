import React from "react";
import CTA from "./CTA";
import ME from "../../assets/daniel-schroter-thuem.png";

const Header: React.FC = () => {
  return (
    <header className="relative flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-6">
      <div className="container mx-auto w-full max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-32">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:space-y-10 lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h5 className="text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
                Hello I&apos;m
              </h5>
              <h1 className="text-3xl font-light leading-tight tracking-[0.2em] text-white sm:text-4xl md:text-4xl md:tracking-[0.25em] lg:text-6xl xl:text-7xl xl:tracking-[0.35em]">
                DANIEL SCHROTER THÜM
              </h1>
              <p className="text-base tracking-wide text-[var(--color-light)] sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
                ML &amp; AI Engineer | Co-Founder at{" "}
                <a
                  href="https://promptic.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
                >
                  Promptic
                </a>
              </p>
            </div>

            <CTA />
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--color-secondary)]/50 via-transparent to-transparent" />
            <img
              src={ME}
              alt="A portrait of Daniel Schroter Thüm"
              title="Daniel Schroter Thüm"
              className="relative z-10 w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
          <a
            href="#about"
            className="text-xs uppercase tracking-[0.45em] text-[var(--color-light)] transition hover:text-[var(--color-secondary)]"
          >
            Scroll Down
          </a>
          <span className="block h-12 w-px bg-[var(--color-primary)]" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
};

export default Header;
