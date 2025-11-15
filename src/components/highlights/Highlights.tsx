import React from "react";

type Highlight = {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
};

const HIGHLIGHT_ITEMS: Highlight[] = [
  {
    id: "promptic",
    title: (
      <>
        Co-founding{" "}
        <a
          href="https://promptic.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
        >
          Promptic
        </a>
      </>
    ),
    description:
      "Building an AI prompt optimization platform to help enterprises scale GenAI deployment through automated, metric-driven optimization.",
  },
  {
    id: "statworx",
    title: (
      <>
        NLP &amp; GenAI Solutions at{" "}
        <a
          href="https://statworx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
        >
          statworx
        </a>
      </>
    ),
    description:
      "Developed AI/NLP solutions for 8+ enterprise projects across automotive, manufacturing, pharma, and insurance – leading AI development on automated negotiation agents, multi-agent voice assistants, and advanced RAG for customer support.",
  },
  {
    id: "semeval",
    title: "SemEval-2023 Task 4 Winner",
    description: (
      <>
        Built the best-performing system for human value detection{" "}
        <span className="font-semibold">(1st of 41 teams)</span>.{" "}
        <a
          href="https://aclanthology.org/2023.semeval-1.74/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
        >
          Published
        </a>{" "}
        at ACL 2023 · Released on Hugging Face (
        <span className="font-semibold">23k+</span> downloads).
      </>
    ),
  },
];

const Highlights: React.FC = () => (
  <section id="highlights" className="relative mt-40 px-4 pb-20">
    <div className="container relative mx-auto max-w-6xl">
      <h5 className="text-right text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
        Professional highlights
      </h5>
      <h2 className="mt-2 text-right text-3xl font-light tracking-[0.4em] text-white">
        Highlights
      </h2>

      <ul className="mt-12 space-y-6">
        {HIGHLIGHT_ITEMS.map(({ id, title, description }) => (
          <li
            key={id}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]/80 p-6 text-left shadow-xl backdrop-blur transition hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <strong className="relative z-10 block text-lg font-semibold text-white">
              {title}
            </strong>
            <p className="relative z-10 mt-2 text-base leading-relaxed text-[var(--color-light)]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Highlights;
