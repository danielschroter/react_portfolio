import React from "react";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const PulsePicker: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a
        href="https://pulsepicker.schroter.eu"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Try it yourself
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
        Data science consultants must stay up to date with the latest papers,
        yet newsletters rarely focus on the specific topics required for a
        project. It is difficult to track research across multiple fields in the
        fast-moving AI landscape.
      </p>
    </ProjectSection>

    <ProjectSection title="Solution">
      <p className="font-semibold text-white">
        PulsePicker is a customizable research newsletter. You subscribe to
        niche topics, an AI agent scans arXiv, and every week you receive a
        concise, tailored summary in your inbox.
      </p>
    </ProjectSection>
  </div>
);

export default PulsePicker;
