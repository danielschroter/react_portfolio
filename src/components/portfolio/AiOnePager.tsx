import React from "react";
import { IoIosRocket } from "react-icons/io";
import OnePagerScreen from "../../assets/onePagerScreenshot.jpg";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const DEMO_URL = "https://aionepager.schroter.eu";

const AiOnePager: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Visit Demo
      </a>
      {git && (
        <a
          href={git}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      )}
    </div>

    <ProjectSection title="Problem">
      <p className="font-semibold text-white">
        CVs, one-pagers, and intranet profiles are hard to maintain and quickly
        become outdated.
      </p>
    </ProjectSection>

    <ProjectSection title="Solution">
      <p className="font-semibold text-white">
        Upload your documents, extract your skills automatically, and generate a
        polished one pager selling you as the expert you are.
      </p>
    </ProjectSection>

    <ProjectSection title="Highlights">
      <div className="grid gap-4 md:grid-cols-3">
        {["Secure", "Automated", "Easy"].map((feature) => (
          <div
            key={feature}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
          >
            <IoIosRocket className="text-2xl text-[var(--color-secondary)]" />
            <p className="mt-2 text-sm text-white/80">{feature}</p>
          </div>
        ))}
      </div>
    </ProjectSection>

    <ProjectSection title="Interface">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src={OnePagerScreen}
          alt="AI One Pager interface"
          loading="lazy"
          className="w-full object-cover"
        />
      </div>
    </ProjectSection>
  </div>
);

export default AiOnePager;
