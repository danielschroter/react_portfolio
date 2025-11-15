import React from "react";
import ModelImg from "../../assets/architecture_so-nlp.png";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git: string;
};

const SoNLP: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
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

    <ProjectSection title='The "Presentation" pipeline'>
      <p>
        We created a Jupyter notebook that guides you through the entire
        data‑processing, training, and evaluation pipeline. Start with{" "}
        <a
          href="https://github.com/danielschroter/so_nlp/blob/master/presentation_pipeline.ipynb"
          className="text-[var(--color-secondary)] underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          presentation_pipeline.ipynb
        </a>{" "}
        to understand the structure of the other notebooks.
      </p>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <p>
        Each model variant has a dedicated notebook detailing preprocessing and
        training. The most sophisticated architecture ingests both the question
        title and body. Each input flows through its own LSTM before we
        concatenate and classify the representation.
      </p>
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src={ModelImg}
          alt="StackOverflow tagging LSTM architecture"
          className="w-full"
          loading="lazy"
        />
      </div>
    </ProjectSection>

    <ProjectSection title="Results">
      <p>
        Evaluation is based on micro F1 across the validation set. Because we
        predict multiple tags, we sweep thresholds from 0 to 1 to find the best
        setting.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-sm text-white/80">
          <thead>
            <tr>
              {["Model", "F1", "Precision", "Recall", "Threshold"].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left font-semibold text-white"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {[
              { model: "BoW", f1: "0.622", precision: "0.667", recall: "0.582", threshold: "0.30" },
              { model: "QB", f1: "0.605", precision: "0.675", recall: "0.548", threshold: "0.35" },
              { model: "QBT", f1: "0.647", precision: "0.740", recall: "0.575", threshold: "0.38" },
            ].map((row) => (
              <tr key={row.model}>
                <td className="px-4 py-2 font-medium text-white">{row.model}</td>
                <td className="px-4 py-2">{row.f1}</td>
                <td className="px-4 py-2">{row.precision}</td>
                <td className="px-4 py-2">{row.recall}</td>
                <td className="px-4 py-2">{row.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="list-disc space-y-1 pl-6 text-sm text-white/70">
        <li>
          <strong>BoW:</strong> bag-of-words baseline
        </li>
        <li>
          <strong>QB:</strong> question body model with one dense layer
        </li>
        <li>
          <strong>QBT:</strong> question body + title model optimized via grid
          search
        </li>
      </ul>
    </ProjectSection>
  </div>
);

export default SoNLP;
