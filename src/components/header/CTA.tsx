import React from "react";
import CV from "../../assets/CV_DanielSchroter_2025.pdf";

const CTA: React.FC = () => (
  <div className="mt-6 flex flex-row items-center justify-center gap-4 lg:justify-start">
    <a
      href={CV}
      download
      className="rounded-lg bg-slate-600/20 px-4 py-2 text-sm font-medium text-cyan-200/90 shadow-lg backdrop-blur transition hover:bg-slate-600/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200/70"
    >
      Download CV
    </a>
    <a
      href="#contact"
      className="rounded-lg border border-cyan-400/60 px-4 py-2 text-sm font-medium text-gray-100 shadow-lg transition hover:border-white hover:bg-gray-800/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200/70"
    >
      Let&apos;s Talk
    </a>
  </div>
);

export default CTA;
