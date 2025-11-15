import React, { useState, useEffect } from "react";
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
import "./portfolio.css";

import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";

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
const data = [
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
    title: "ProjectHR21 ",
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
    more: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "ExplainableAI for Siamese Neural Networks ",
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
    more: "#",
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
    title: "Builduing a chatbot with RASA",
    github: "",
    more: "#",
    demo: "",

    subtitle: "Internship @ Credit Suisse: Builduing an AI based Chatbot",
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
      "t-sne",
      "random forest",
      "xgBoost",
      "cost sensitive learning",
    ],
  },
];

const Portfolio = () => {
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const cards = document.querySelectorAll(".portfolio__item");
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleOnMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
    };
  }, []);

  const { id } = useParams();

  const [toggleState, setToggleState] = useState(0);
  const [initialLoad, setInitialLoad] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
    setInitialLoad(true);
  };

  useEffect(() => {
    if (!initialLoad) {
      switch (id) {
        case "expAI":
          setToggleState(5);
          break;
        case "predMain":
          setToggleState(1);
          break;
        case "projecthr21":
          setToggleState(6);
          break;
        case "autoTagging":
          setToggleState(4);
          break;
        case "chatbot":
          setToggleState(3);
          break;
        case "reinforcement":
          setToggleState(2);
          break;
        case "pulsepicker":
          setToggleState(9);
          break;
        case "promptic":
          setToggleState(10);
          break;
        default:
          setToggleState(0);
      }
    }
  }, [id, initialLoad]);

  return (
    <section id="portfolio">
      <h5 className="text-sm">My Recent Work</h5>
      <h2 className="text-2xl tracking-widest font-thin">Personal Projects</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            demo,
            subtitle,
            github,
            subheading,
            keywords,
          }) => {
            return (
              <React.Fragment key={id}>
                <div className="portfolio__item">
                  <div className="portfolio__item-image-div">
                    <img
                      className="portfolio__item-image"
                      src={image}
                      alt={title}
                    />
                  </div>
                  <div className="font-thin text-lg mt-3 mb-2">{title}</div>
                  <div className="text-sm mb-4">{subtitle}</div>
                  <div className="portfolio__item-cta">
                    {demo.length > 0 ? (
                      <a
                        href={demo}
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    ) : null}
                    {github.length > 0 ? (
                      <a
                        href={github}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    ) : null}
                    <button
                      className="btn btn-primary"
                      onClick={() => toggleTab(id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <div
                  className={
                    toggleState === id
                      ? "portfolio__modal active-modal"
                      : "portfolio__modal"
                  }
                >
                  <div className="portfolio__modal-content">
                    <AiOutlineClose
                      className="portfolio__modal-close"
                      onClick={() => toggleTab(0)}
                    />
                    <h2 className="portfolio__modal-title">{title}</h2>
                    <div className="text-center mb-10 text-lg">
                      {subheading}
                    </div>
                    {id === 1 ? (
                      <BaBwl git={github} words={keywords} />
                    ) : id === 2 ? (
                      <BaCS git={github} words={keywords} />
                    ) : id === 3 ? (
                      <Rasa words={keywords} />
                    ) : id === 4 ? (
                      <SoNLP words={keywords} git={github} />
                    ) : id === 5 ? (
                      <ExpAI words={keywords} git={github} />
                    ) : id === 6 ? (
                      <Projecthr21 words={keywords} git={github} />
                    ) : id === 7 ? (
                      <AiOnePager words={keywords} git={github}></AiOnePager>
                    ) : id === 8 ? (
                      <HumValue words={keywords} git={github}></HumValue>
                    ) : id === 9 ? (
                      <PulsePicker words={keywords} git={github}></PulsePicker>
                    ) : id === 10 ? (
                      <Promptic words={keywords} git={github}></Promptic>
                    ) : null}
                  </div>
                </div>
              </React.Fragment>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
