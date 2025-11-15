import React from "react";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const Promptic: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a
        href="https://promptic.eu/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Visit Website
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
        Prompt optimization for large language models is critical yet mostly a
        manual process. Engineers spend countless hours tweaking prompts without
        a systematic way to evaluate them against business metrics or their own
        data.
      </p>
    </ProjectSection>

    <ProjectSection title="Solution">
      <p className="font-semibold text-white">
        Promptic delivers automated, analytics-driven prompt optimization. Upload
        your data, provide the initial prompt, and let Promptic iteratively
        refine it using deep-learning models—no coding required. The output is a
        tailored prompt that maximizes downstream performance for your use case.
      </p>
    </ProjectSection>
  </div>
);

export default Promptic;
