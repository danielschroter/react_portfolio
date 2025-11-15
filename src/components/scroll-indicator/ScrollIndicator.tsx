import React, { useEffect, useState } from "react";

const SECTION_IDS = [
  { id: "about", label: "About" },
  { id: "highlights", label: "Highlights" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ScrollIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTION_IDS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center lg:flex">
      <div className="relative flex flex-col items-center">
        <div className="h-72 w-px rounded-full bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.35)]" />
        <div className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-between py-1">
          {SECTION_IDS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="group relative flex flex-col items-center"
                aria-label={`Jump to ${label}`}
              >
                <span
                  className={`mb-2 hidden rounded px-2 py-1 text-xs uppercase tracking-wide text-white/70 shadow-lg transition group-hover:block ${
                    isActive ? "bg-[var(--color-secondary)]/80" : "bg-black/50"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`h-3 w-3 rounded-full transition duration-300 ${
                    isActive
                      ? "bg-[var(--color-secondary)] shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                      : "bg-white/20 group-hover:bg-white/50"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
