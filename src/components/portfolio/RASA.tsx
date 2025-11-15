import React from "react";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
};

const Rasa: React.FC<ProjectProps> = () => (
  <div className="space-y-8">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <p className="text-base font-semibold text-white">
        Internship: building an AI-based chatbot and QA system for
        front-business support.
      </p>
    </div>

    <ProjectSection title="Project Setting">
      <p>
        This project was part of an internship with a financial institution,
        therefore I cannot share source code.
      </p>
    </ProjectSection>

    <ProjectSection title="Goal">
      <p>
        Build a Rasa-driven chatbot to support front-office teams. The bot was
        paired with a Haystack-based question-answering pipeline and
        Elasticsearch document store to fetch precise answers from policy
        documents. Feel free to reach out if you’d like to learn more.
      </p>
    </ProjectSection>
  </div>
);

export default Rasa;
