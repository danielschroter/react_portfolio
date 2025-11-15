import React from "react";
import Thesis_CS from "../../assets/BA_Daniel_Schroter_final.pdf";
import ProjectSection from "./ProjectSection";

type ProjectProps = {
  words?: string[];
  git?: string;
};

const BaCS: React.FC<ProjectProps> = ({ git }) => (
  <div className="space-y-8">
    <div className="flex flex-wrap gap-3 border-y border-white/10 py-4">
      <a href={Thesis_CS} download className="btn btn-tertiary">
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
        I modelled the beer distribution game as a reinforcement learning
        problem to understand whether an agent can dampen the bullwhip effect.
        Agents representing different supply-chain participants (random,
        human-like, optimal) interact and the RL agent learns an ordering policy
        that reduces inventory costs by up to 69%.
      </p>
    </ProjectSection>

    <ProjectSection title="Abstract">
      <p>
        Human decision makers frequently create costly fluctuations in serial
        supply chains. The beer distribution game illustrates these dynamics but
        the optimal policy is already known. In many cases, continuous versions
        of the game are more realistic, allowing us to leverage
        policy-gradient-based reinforcement learning.
      </p>
      <p>
        I created both discrete and continuous environments to experiment with
        REINFORCE and DDPG algorithms. The results show that policy-gradient
        methods can match state-of-the-art action-value approaches while scaling
        better to multi-product settings. The work lays the foundation for
        future research on intelligent agents controlling supply chains.
      </p>
    </ProjectSection>
  </div>
);

export default BaCS;
