import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";

import IMG5 from "../../assets/ai_cropped.jpg";
import AiOnePagerImg from "../../assets/AiOnePager.png";
import IMG3 from "../../assets/chatbot.jpg";
import IMG6 from "../../assets/collaboration.jpg";
import HumanValuesImg from "../../assets/Human_Values_Newspaper.png";
import IMG2 from "../../assets/intelligent agent.jpg";
import IMG_PULSE from "../../assets/owl.webp";
import IMG1 from "../../assets/production.jpg";
import IMG_PROMPTIC from "../../assets/promptic.png";
import IMG4 from "../../assets/technology.jpg";

import AiOnePager from "./AiOnePager";
import BaBwl from "./BA_BWL";
import BaCS from "./BA_CS";
import ExpAI from "./Exp_AI";
import HumValue from "./HumValue";
import Projecthr21 from "./ProjectHr21";
import Promptic from "./Promptic";
import PulsePicker from "./Pulsepicker";
import Rasa from "./RASA";
import SoNLP from "./SO_NLP";
import Keywords from "./Keywords";

type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  subheading: string;
  github: string;
  demo: string;
  keywords: string[];
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 10,
    image: IMG_PROMPTIC,
    title: "Promptic",
    github: "",
    subheading: "One-click prompt optimization for LLMs.",
    subtitle:
      "Simple, powerful, and analytics-driven prompt optimization based on your individual business metrics.",
    demo: "https://promptic.eu/",
    keywords: [
      "Prompt Engineering",
      "LLMs",
      "Generative AI",
      "Prompt Optimization",
      "Metric-driven optimization",
    ],
  },
  {
    id: 9,
    image: IMG_PULSE,
    title: "PulsePicker",
    github: "",
    subheading:
      "Research Agent: A research agent that helps you stay up-to-date with the latest research in your field.",
    subtitle:
      "AI Agents search arXiv and send you summaries about the latest research in your field.",
    demo: "https://pulsepicker.schroter.eu",
    keywords: [
      "Agents",
      "Generative AI",
      "arXiv",
      "OpenAI",
      "Azure",
      "Python",
      "FastAPI",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "Vercel",
    ],
  },
  {
    id: 7,
    image: AiOnePagerImg,
    title: "AI One Pager",
    github: "",
    demo: "https://aionepager.schroter.eu/",
    subheading:
      "AI analyzes your skillset and writes an One Pager selling you as the expert that you are!",
    subtitle:
      "AI analyzes your skillset and writes an One Pager selling you as the expert that you are!",
    keywords: [
      "Competence Extraction",
      "Skills Database",
      "Natural Language Processing",
      "Large Language Models",
      "OpenAI GPT",
      "Serverless",
      "Vercel",
      "Google Cloud Platform",
      "Microservices",
      "AWS S3",
    ],
  },
  {
    id: 8,
    image: HumanValuesImg,
    title: "Human Value Detector",
    github: "https://github.com/danielschroter/human_value_detector",
    demo: "",
    subheading:
      "Competition winning system that discovers human values in arguments in an explainable way",
    subtitle:
      "Competition winning system that discovers human values in arguments in an explainable way",
    keywords: [
      "Transformer",
      "RoBERTa | DeBERTa",
      "T5",
      "ExplainableAI",
      "Lime | Loco",
      "Ensemble Models",
      "Plausibility",
      "Faithfulness",
      "Python",
      "Pytorch Lightning",
      "Neptune.ai",
    ],
  },
  {
    id: 6,
    image: IMG6,
    title: "ProjectHR21",
    github: "",
    subtitle: "NLP-Web-Application to transform the way we work together",
    demo: "",
    subheading:
      "Overcoming the boundaries of personal networks and creating new ways of collaboration",
    keywords: [
      "Natural Language Processing",
      "Web-Application",
      "MERN-Stack",
      "Python",
      "HR-TECH",
      "Competence Extraction",
      "Skills Monitoring",
      "New Work",
    ],
  },
  {
    id: 5,
    image: IMG5,
    title: "ExplainableAI for Siamese Neural Networks",
    subtitle:
      "Explaining the motives and decisions of siamese neural networks.",
    github: "https://github.com/danielschroter/explainableAI",
    demo: "",
    subheading:
      'Applying "explainability" techniques to understand the motives and decisions of neural networks.',
    keywords: [
      "Natural Language Processing",
      "Deep Learning",
      "Explainability",
      "Neural Networks",
      "Interpretability",
      "Siamese Neural Networks",
      "Python",
      "LIME",
      "SHAP",
      "Key-Point Extraction",
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: "Reinforcement Learning for Logistics",
    subtitle: "RL to optimize cost within a multi-agent supply chain",
    github: "https://github.com/danielschroter/thesis_cs_rl",
    subheading:
      "Bachelor Thesis: Training an agent with Reinforcement Learning Algorithms to optimize cost in a serial multi-agent supply chain.",
    demo: "",
    keywords: [
      "Reinforcement Learning",
      "DDPG",
      "Policy Gradient",
      "Multi Agent Supply Chain",
      "Cost Optimization",
      "Open AI Gym",
    ],
  },
  {
    id: 3,
    image: IMG3,
    title: "Building a chatbot with RASA",
    github: "",
    demo: "",
    subtitle: "Internship @ Credit Suisse: Building an AI based Chatbot",
    subheading: "Designing and deploying an AI-based assistant with RASA.",
    keywords: [
      "RASA",
      "Question-Answering-Systems",
      "AI-based Chatbot",
      "FastAPI",
      "Python",
      "Elasticsearch",
      "Haystack",
    ],
  },
  {
    id: 4,
    image: IMG4,
    title: "NLP: StackOverflow tagging",
    subheading:
      "Applying Deep Learning to automatically tag StackOverflow questions based on Title & Body text",
    keywords: [
      "Natural Language Processing",
      "Deep Learning",
      "Python",
      "Neural Networks",
      "Bag of Words",
      "LSTM",
      "Word Embeddings",
      "Grid Search",
    ],
    demo: "",
    subtitle:
      "Automatic Tagging of topics to stackoverflow with deep neural networks",
    github: "https://github.com/danielschroter/so_nlp",
  },
  {
    id: 1,
    image: IMG1,
    title: "Predictive Maintenance @ Bosch production line",
    github: "https://github.com/danielschroter/predictive_main_bosch",
    subheading:
      "Bachelor Thesis: Applying machine learning algorithms for predictive maintenance in a production line.",
    subtitle:
      "Analyzing Bosch Production Line to improve quality control with cost sensitive learning",
    demo: "",
    keywords: [
      "R",
      "Machine Learning",
      "CRISP-DM",
      "Business Process",
      "t-SNE",
      "Random Forest",
      "XGBoost",
      "Cost Sensitive Learning",
    ],
  },
];

const SLUG_TO_ID: Record<string, number> = {
  expAI: 5,
  predMain: 1,
  projecthr21: 6,
  autoTagging: 4,
  chatbot: 3,
  reinforcement: 2,
  pulsepicker: 9,
  promptic: 10,
};

const renderProjectDetails = (
  projectId: number,
  keywords: string[],
  github: string
): React.ReactNode => {
  switch (projectId) {
    case 1:
      return <BaBwl git={github} words={keywords} />;
    case 2:
      return <BaCS git={github} words={keywords} />;
    case 3:
      return <Rasa words={keywords} />;
    case 4:
      return <SoNLP words={keywords} git={github} />;
    case 5:
      return <ExpAI words={keywords} git={github} />;
    case 6:
      return <Projecthr21 words={keywords} git={github} />;
    case 7:
      return <AiOnePager words={keywords} git={github} />;
    case 8:
      return <HumValue words={keywords} git={github} />;
    case 9:
      return <PulsePicker words={keywords} git={github} />;
    case 10:
      return <Promptic words={keywords} git={github} />;
    default:
      return null;
  }
};

const Portfolio: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleOpen = (projectId: number | null) => {
    setActiveProject(projectId);
    setHasInteracted(true);
  };

  useEffect(() => {
    if (hasInteracted || !id) return;
    const mappedId = SLUG_TO_ID[id];
    if (mappedId) {
      setActiveProject(mappedId);
    }
  }, [id, hasInteracted]);

  return (
    <section id="portfolio" className="mt-40 px-4">
      <div className="container mx-auto max-w-6xl">
        <h5 className="text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
          My Recent Work
        </h5>
        <h2 className="mt-2 text-3xl font-light tracking-[0.4em] text-white">
          Personal Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO_ITEMS.map((project) => {
          const isActive = activeProject === project.id;
          return (
            <React.Fragment key={project.id}>
              <article
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-card-border)] p-5 shadow-2xl transition hover:-translate-y-1"
                style={{ backgroundColor: "rgba(22, 38, 44, 0.85)" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold tracking-wide text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80"
                    >
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">
                      +{project.keywords.length - 3} more
                    </span>
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                    >
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => handleOpen(project.id)}
                    className="rounded-lg border border-[var(--color-secondary)] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Read More
                  </button>
                </div>
              </article>

              <div
                className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-lg transition ${
                  isActive
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <div
                  className="relative w-full max-w-4xl rounded-3xl border border-white/10 p-8 text-left shadow-2xl sm:p-10 lg:p-12"
                  style={{ backgroundColor: "rgba(14, 20, 22, 0.95)" }}
                >
                  <button
                    type="button"
                    onClick={() => handleOpen(null)}
                    className="absolute right-4 top-4 rounded-full border border-white/30 p-2 text-xl text-white transition hover:border-white hover:text-[var(--color-secondary)]"
                    aria-label="Close project dialog"
                  >
                    <AiOutlineClose />
                  </button>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-semibold tracking-wide text-white">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-lg text-white/80">
                        {project.subheading}
                      </p>
                    </div>
                    <Keywords words={project.keywords} />
                    <div className="space-y-4 text-white">
                      {renderProjectDetails(
                        project.id,
                        project.keywords,
                        project.github
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
