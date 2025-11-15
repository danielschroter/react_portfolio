import React from "react";

const TECHNOLOGY_SKILLS = [
  "Python",
  "PyTorch",
  "Natural Language Processing",
  "Generative AI",
  "RAG",
  "PEFT Fine-Tuning",
  "Prompt Engineering",
  "Deep Learning",
  "Machine Learning",
  "Transformers",
  "Explainable AI",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Docker",
  "Azure",
  "GCP",
  "Microservices",
] as const;

const MANAGEMENT_SKILLS = [
  "Business Development",
  "Entrepreneurship",
  "Pitching & Presentations",
  "Management Science",
  "Operations Research",
  "Agile Software Development",
] as const;

const Experience: React.FC = () => (
  <section id="experience" className="relative mt-40 px-4 pb-20">
    <div className="container relative mx-auto max-w-6xl">
      <h5 className="text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
        The skills I have
      </h5>
      <h2 className="mt-2 text-3xl font-light tracking-[0.4em] text-white">
        My Experience
      </h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]/80 p-8 shadow-2xl backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/15 via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-100" />
        <h3 className="relative z-10 text-center text-xl font-semibold text-[var(--color-primary)]">
          Technology
        </h3>
        <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
          {TECHNOLOGY_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--color-secondary)]/60 px-4 py-1 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-secondary)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]/80 p-8 shadow-2xl backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 via-transparent to-transparent opacity-0 transition duration-300 hover:opacity-100" />
        <h3 className="relative z-10 text-center text-xl font-semibold text-[var(--color-primary)]">
          Management
        </h3>
        <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
          {MANAGEMENT_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--color-secondary)]/60 px-4 py-1 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-secondary)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default Experience;
