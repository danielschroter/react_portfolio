import React from "react";
import { IoIosRocket } from "react-icons/io";
import Paper from "../../assets/key-point-analysis-and-explanations-for-quantitative-text-analysis.pdf";
import Slides from "../../assets/Final_presentation.pdf";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const ExpAI: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a href={Paper} download className="btn btn-tertiary">
        Download Paper
      </a>
      <a href={Slides} download className="btn btn-tertiary">
        Download Presentation
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

    <ProjectSection title="Goal">
      <p>
        Public debates increasingly happen online. Capturing key ideas from
        thousands of arguments can transform policy and business decisions. We
        built models that assign arguments to key points and, crucially, explain
        why the match occurs.
      </p>
    </ProjectSection>

    <ProjectSection title="Performance">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Siamese neural networks outperform prior work by up to 5%",
          "First approach applying LIME to siamese networks",
        ].map((achievement) => (
          <div
            key={achievement}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <IoIosRocket className="text-2xl text-[var(--color-secondary)]" />
            <p className="text-sm text-white/80">{achievement}</p>
          </div>
        ))}
      </div>
    </ProjectSection>

    <ProjectSection title="Example explanation">
      <p>
        We modified LIME to work with siamese neural networks, allowing us to
        visualize why an argument matches a key point. Orange highlights boost
        similarity while blue highlights decrease it.
      </p>
      <p className="text-sm italic text-white/70">
        Argument: “The United States is undoubtedly the richest country ...”
      </p>
      <p className="text-sm italic text-white/70">
        Key point: “The US has a good economy / high standard of living.”
      </p>
      <p className="text-sm text-white/80">
        Prediction probabilities: Similar <strong>0.78</strong>, Dissimilar{" "}
        <strong>0.22</strong>. The explanation shows that terms such as
        “income” and “productive country” contribute to the model’s confidence,
        even if they are not literally part of the key point.
      </p>
    </ProjectSection>

    <ProjectSection title="Abstract">
      <p>
        We address the KPA shared task 2021 of matching arguments to key points.
        Two architectures are explored: a TSDAE combined with a siamese network
        and a transformer-based siamese model enriched with linguistic features.
      </p>
      <p>
        Both improve upon prior benchmarks by 2–5%. To make decisions
        explainable, we introduce a simple yet novel adaptation of LIME for
        siamese networks. The project contributes both stronger models and a
        practical interpretability technique for argument-key point matching.
      </p>
    </ProjectSection>
  </div>
);

export default ExpAI;
