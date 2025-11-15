import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/Sizilien.jpeg";

const HIGHLIGHTS = [
  {
    title: "Education",
    description: "Management (B.Sc), Computer Science (B.Sc, M.Sc)",
    Icon: FaAward,
  },
  {
    title: "Passion",
    description: "AI • Deep Learning • HR-Tech • Sailing • Food & Traveling",
    Icon: FiUser,
  },
  {
    title: "Experience",
    description: "10+ projects: From AI-driven chatbots to NLP web apps",
    Icon: VscFolderLibrary,
  },
] as const;

const About: React.FC = () => (
  <section id="about" className="relative mt-32 px-4 pb-20">
    <div className="container relative mx-auto max-w-6xl">
      <h5 className="text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
        Get to know
      </h5>
      <h2 className="mt-2 text-3xl font-light tracking-[0.4em] text-white">
        About Me
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.5fr,1fr]">
        <div className="relative mx-auto max-w-sm">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--color-secondary)]/50 via-transparent to-transparent" />
          <img
            src={ME}
            alt="Daniel Schroter Thüm"
          title="Daniel Schroter Thüm"
          width={600}
          height={600}
          loading="lazy"
          className="relative z-10 rounded-[2rem] border border-white/10 object-cover shadow-2xl"
        />
      </div>

      <div className="space-y-10 text-sm leading-relaxed tracking-wide text-[var(--color-light)]">
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/60"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <Icon className="relative z-10 mx-auto mb-3 text-2xl text-[var(--color-secondary)]" />
              <h5 className="relative z-10 mb-2 text-base font-semibold text-white">
                {title}
              </h5>
              <p className="relative z-10 text-xs text-[var(--color-light)]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-4 text-base text-white/80">
          <p>
            I&apos;m a Data Scientist &amp; AI Engineer specializing in Natural
            Language Processing and Generative AI. Currently co-founding{" "}
            <a
              href="https://promptic.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
            >
              Promptic
            </a>
            , where we help businesses scale GenAI through automated and
            metric-driven prompt optimization.
          </p>
          <p>
            I work as an AI Engineer at <strong>statworx</strong>, building
            enterprise NLP and GenAI solutions for clients. Beyond my work
            there, I have contributed to academic NLP research, winning{" "}
            <strong>SemEval-2023 Task 4</strong> and publishing at ACL 2023.
          </p>
          <p>
            With a background in both Computer Science (M.Sc) and Business
            Administration (B.Sc), I focus on building AI systems that deliver
            measurable value while remaining explainable and user-centered.
          </p>
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default About;
