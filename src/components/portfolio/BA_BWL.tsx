import React from "react";
import Thesis_BWL from "../../assets/BA_final_3.pdf";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const BaBwl: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a href={Thesis_BWL} download className="btn btn-tertiary">
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
        Within this thesis I applied various machine learning techniques to
        solve a predictive maintenance task within a production line. Using the{" "}
        <a
          href="https://www.kaggle.com/competitions/bosch-production-line-performance/overview"
          className="text-[var(--color-secondary)] underline-offset-4 hover:underline"
        >
          BOSCH competition dataset
        </a>
        , I walked through the full CRISP-DM process and built a solution that
        has tangible business impact.
      </p>
      <p>Feel free to download the PDF to dive deeper.</p>
    </ProjectSection>

    <ProjectSection title="Abstract">
      <p>
        In the era of Industry 4.0, companies need practical showcases on how
        to apply AI to real problems. This case focuses on predicting whether a
        produced part fails internal quality control so that only high-quality
        goods are shipped.
      </p>
      <p>
        The case balances business perspective with statistical rigor. It
        highlights how creativity, experimentation, and compromises are required
        across the entire data-mining process. It is designed as a teaching case
        for business students as well as decision makers dealing with predictive
        analytics.
      </p>
    </ProjectSection>
  </div>
);

export default BaBwl;
