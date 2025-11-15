import React from "react";
import { FaAward } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import Paper from "../../assets/HumEvalSchroter.pdf";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const HumValue: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex justify-center text-[var(--color-secondary)]">
      <FaAward className="text-4xl" />
    </div>

    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a
        href="https://value-detector.schroter.eu/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Demo
      </a>
      <a href={Paper} download className="btn btn-tertiary">
        Download Paper
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
        Why are some arguments more convincing than others? Often it depends on
        the underlying human values they appeal to. We built the winning system
        of SemEval-2023 Task 4 to automatically detect those values in
        arguments.
      </p>
    </ProjectSection>

    <ProjectSection title="Performance">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "SemEval-2023 Task 4 winner (team alias: Adam Smith)",
          "F1 score of 0.56 – 33% higher than the baseline",
          "LIME explanations reveal model reasoning in natural language",
          "LIME explanations show higher faithfulness than LOCO",
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
      <p className="text-sm italic text-white/70">
        Argument: “We should ban whaling, whaling is wiping out species for
        little in return.”
      </p>
      <p className="text-sm text-white/80">
        Predicted value: <strong>Universalism – Nature</strong> (confidence
        0.92). The top three highlighted terms account for 78% of the model’s
        confidence. Orange terms support the prediction, showing that the model
        learned the relationship between “ban”, “wiping out species”, and the
        human value of protecting nature.
      </p>
    </ProjectSection>

    <ProjectSection title="Abstract">
      <p>
        We participated in SemEval-2023 Task 4: identifying human values behind
        arguments. Our system topped 39 research teams and demonstrates that
        high-performing models can still be interpretable. We coupled strong
        architectures with explainable AI techniques, surveying end users to
        verify that the explanations are understandable.
      </p>
    </ProjectSection>
  </div>
);

export default HumValue;
