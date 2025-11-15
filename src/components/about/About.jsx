import React, { useState } from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/Sizilien.jpeg";
// import ME from "../../assets/Bewerbung_black_small-removebg-preview.png";

const About = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleOnMouseMove = (e) => {
    console.log("e", e);
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    console.log("x", x);
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="about">
      <h5 className="text-sm">Get to know</h5>
      <h2 className="text-2xl tracking-widest font-thin">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <div className="relative w-50 h-50 bg-gray-300 rounded-full filter blur-3xl opacity-20 sm:opacity-20 animate-blob animation-delay-4000"></div> */}
            <img
              src={ME}
              alt="Daniel Schroter Thüm About"
              title="Daniel Schroter Thüm"
              width="600"
              height="600"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              onMouseMove={(e) => handleOnMouseMove(e)}
            >
              {/* <div className="about__card_border"></div> */}

              {/* <div className="about__card_content"> */}
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Management (B.Sc), Computer Science (B.Sc, M.Sc)</small>
              {/* </div> */}
            </article>

            <article
              className="about__card"
              onMouseMove={(e) => handleOnMouseMove(e)}
            >
              {/* <div className="about__card_border"></div> */}

              {/* <div className="about__card_content"> */}
              <FiUser className="about__icon" />
              <h5>Passion</h5>
              <small>
                AI | Deep Learning | HR-Tech | Sailing | Food & Traveling
              </small>
              {/* </div> */}
            </article>

            <article
              className="about__card"
              onMouseMove={(e) => handleOnMouseMove(e)}
            >
              {/* <div className="about__card_border"></div> */}

              {/* <div className="about__card_content"> */}
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>
                10+ projects: From AI-driven Chatbots to NLP-centered
                Web-Application
              </small>
              {/* </div> */}
            </article>
          </div>
          <div className="text-sm tracking-wide mt-10">
            <div>
              I'm a Data Scientist & AI Engineer specializing in Natural Language Processing and Generative AI. Currently co-founding <a href="https://promptic.eu" target="_blank" rel="noopener noreferrer" className="font-bold">Promptic</a>, where we help businesses scale GenAI by automated and metric-driven prompt optimization.
            </div>

            <div className="mt-4">
              I work as an AI Engineer at <strong>statworx</strong>, building enterprise NLP and GenAI solutions for clients. Beyond my work there, I've also contributed to academic NLP research, winning <strong>SemEval-2023 Task 4</strong> and publishing at ACL 2023.
            </div>

            <div className="mt-4">
              With a background in both Computer Science (M.Sc) and Business Administration (B.Sc), I focus on building AI systems that deliver measurable value while remaining explainable and user-centered.
            </div>

            {/* <span className="about__span">
              For years I have been interested in the development of artificial
              intelligence. I started to study management and technology to gain
              a feeling for the value-creating potential that modern
              technologies can deliver. &nbsp;
            </span> */}
            {/* {viewMore ? (
              <span>
                <span className="about__span">
                  Diving deeper into that topic I felt the desire of not only
                  being able to understand but also to apply those modern
                  technologies. To get an in-depth understanding of the
                  opportunities and boundaries they incorporate I studied
                  Informatics with a focus on Artificial Intelligence, Machine
                  Learning and Natural Language Processing.
                </span>
                
                <div className="text-center mt-5">
                  <button
                    onClick={() => setViewMore(false)}
                    className="text-[var(--color-secondary)]"
                  >
                    Read Less
                  </button>
                </div>
              </span>
            ) : (
              <div className="text-center mt-5">
                <button
                  onClick={() => setViewMore(true)}
                  className="text-[var(--color-secondary)]"
                >
                  Read More
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
