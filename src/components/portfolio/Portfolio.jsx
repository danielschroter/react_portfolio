import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/production.jpg";
import IMG2 from "../../assets/intelligent agent.jpg";
import IMG3 from "../../assets/chatbot.jpg";
import IMG4 from "../../assets/technology.jpg";
import IMG5 from "../../assets/ai_cropped.jpg";
import IMG6 from "../../assets/collaboration.jpg";
import AiOnePagerImg from "../../assets/AiOnePager.png";
import HumanValuesImg from "../../assets/Human_Values_Newspaper.png";

import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import BaBwl from "./BA_BWL";
import BaCS from "./BA_CS";
import Rasa from "./RASA";
import SoNLP from "./SO_NLP";
import ExpAI from "./Exp_AI";
import Projecthr21 from "./ProjectHr21";

const data = [
  {
    id: 7,
    image: AiOnePagerImg,
    title: "AI One Pager",
    github: "https://github.com/danielschroter/skillExtractor",
    demo: "https://aionpager.schroter.eu/",
    subheading: "AI analyzes your skillset and writes an One Pager",
    subtitle: "AI analyzes your skillset and writes an One Pager",
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
    demo: "https://human-value-app.vercel.app/",
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
    github: "https://github.com/danielschroter",
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
    github: "#",
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
        default:
          setToggleState(0);
      }
    }
  });

  return (
    <section id="portfolio">
      <h5 className="text-sm">My Recent Work</h5>
      <h2 className="text-2xl tracking-widest font-thin">Portfolio</h2>

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
              <>
                <div key={id} className="portfolio__item">
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
                        className="btn bg-[var(--color-primary)]"
                        target="_blank"
                      >
                        Demo
                      </a>
                    ) : null}
                    {id === 3 ? null : (
                      <a href={github} className="btn" target="_blank">
                        Github
                      </a>
                    )}
                    <a
                      className="btn btn-primary"
                      onClick={() => toggleTab(id)}
                    >
                      Read More
                    </a>
                    {/*{id === 6 ? <a href="https://projecthr-21.herokuapp.com/" target="_blank" */}
                    {/*               className='btn btn-primary'>Demo</a> : null}*/}
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
                    <div className="text-center">{subheading}</div>
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
                    ) : null}
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
