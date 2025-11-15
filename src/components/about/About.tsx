import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/Sizilien.jpeg";

const HIGHLIGHTS = [
  {
    title: "Education",
    description: "Technical University of Munich (TUM) — M.Sc & B.Sc Computer Science, B.Sc Management & Technology",
    Icon: FaAward,
  },
  {
    title: "Experience",
    description: "AI Engineer at statworx, Co-Founder at Promptic",
    Icon: VscFolderLibrary,
  },
  {
    title: "Specialization",
    description: "Natural Language Processing & Generative AI",
    Icon: FiUser,
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

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:gap-12">
        {/* Left Column: Image & Stats */}
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-3xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/30 via-transparent to-transparent transition duration-500 group-hover:from-[var(--color-secondary)]/50" />
            <img
              src={ME}
              alt="Daniel Schroter Thüm"
              title="Daniel Schroter Thüm"
              width={600}
              height={600}
              loading="lazy"
              className="relative z-10 w-full rounded-3xl border border-white/10 object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {HIGHLIGHTS.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]/80 p-4 backdrop-blur transition hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--color-bg-variant)]">
                    <Icon className="text-xl text-[var(--color-secondary)]" />
                  </div>
                  <div className="flex-1">
                    <h5 className="mb-1 text-sm font-semibold text-white">
                      {title}
                    </h5>
                    <p className="text-xs leading-relaxed text-[var(--color-light)]">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-5 text-base leading-relaxed text-white/85">
            <p className="text-lg">
              I&apos;m a <span className="font-semibold text-white">Data Scientist &amp; AI Engineer</span> specializing in{" "}
              <span className="font-medium text-[var(--color-secondary)]">Natural Language Processing</span> and{" "}
              <span className="font-medium text-[var(--color-secondary)]">Generative AI</span>.
            </p>
            
            <p>
              My work focuses on building production-ready AI systems that solve real business problems—from 
              enterprise chatbots and automated agents to prompt optimization platforms and research-grade NLP models.
            </p>
            
            <p>
              I combine hands-on technical implementation with strategic thinking, whether that&apos;s 
              architecting GenAI solutions for large enterprises, building startup products, or 
              contributing to academic NLP research.
            </p>
            
            <p>
              Beyond writing code, I&apos;m passionate about making AI accessible and explainable—ensuring 
              that the systems I build deliver measurable value while remaining transparent and user-centered.
            </p>
            
            <p className="pt-2 text-sm italic text-white/70">
              My background combines computer science and management studies from Technical University of Munich, 
              allowing me to approach problems from both technical and business perspectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
