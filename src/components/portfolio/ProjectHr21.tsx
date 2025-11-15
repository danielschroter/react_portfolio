import React from "react";
import { IoIosRocket } from "react-icons/io";
import DASHBOARD from "../../assets/ProjectHR21-Dashboard.jpg";
import P21IMG from "../../assets/ProjectHR21-Skills.jpg";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const Projecthr21: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    {git && (
      <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
        <a
          href={git}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    )}
    <ProjectSection title="Problem">
      <p>
        “I’m working on a sentiment model with Python—who can help me?” Remote
        work and flexible models make it hard to know which colleagues hold
        certain skills.
      </p>
    </ProjectSection>

    <ProjectSection title="Goal">
      <p>
        Create direct, horizontal collaboration links. Let people discover
        expertise within the organization so that the workforce can respond to
        rapid change and reach its full potential.
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

    <ProjectSection title="Example workflow">
      <div className="space-y-6">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img src={P21IMG} alt="Skill extraction" className="w-full" />
        </div>
        <div className="space-y-2 text-sm text-white/70">
          <p className="text-center font-semibold text-white">
            Analysis of my theses
          </p>
          <p>1. Machine learning within a production line</p>
          <p>2. Reinforcement learning in a serial supply chain</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img src={DASHBOARD} alt="ProjectHR21 dashboard" className="w-full" />
        </div>
      </div>
    </ProjectSection>

    <ProjectSection title="Solution">
      <p>
        NLP extracts competencies from the daily work. Employees receive a
        private profile to monitor their skills and can opt into being
        discoverable—forging new collaboration links across the organization.
      </p>
    </ProjectSection>
  </div>
);

export default Projecthr21;
