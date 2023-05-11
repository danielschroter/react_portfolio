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
            <img src={ME} alt="About Image" />
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
              <small>
                Management (B.Sc), Computer Science (B.Sc, soon M.Sc)
              </small>
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
          <div className="text-sm">
            <p> Hello together,</p>
            <p>
              I am happy you found the way to my personal website! So let me
              briefly introduce myself... I would consider myself as an
              entrepreneurial thinking computer scientist with a strong
              background in business administration.
            </p>

            <span className="about__span">
              For years I have been interested in the development of artificial
              intelligence. I started to study management and technology to gain
              a feeling for the value-creating potential that modern
              technologies can deliver. &nbsp;
            </span>
            {viewMore ? (
              <span>
                <span className="about__span">
                  Diving deeper into that topic I felt the desire of not only
                  being able to understand but also to apply those modern
                  technologies. To get an in-depth understanding of the
                  opportunities and boundaries they incorporate I studied
                  Informatics with a focus on Artificial Intelligence, Machine
                  Learning and Natural Language Processing.
                </span>
                <p>
                  Personally, I think that AI can deliver great value.
                  Especially in the areas of Natural Language Processing and
                  Augmented Reality. Nevertheless it is crucial to connect with
                  customers & users to meet their demands. By making black
                  models explainable (explainableAI) we will be able to exploit
                  the full potential of these technologies and deliver great
                  value to our society!
                </p>
                <div className="about__read-more">
                  <a onClick={() => setViewMore(false)}>Read Less</a>
                </div>
              </span>
            ) : (
              <div className="about__read-more">
                <a onClick={() => setViewMore(true)}>Read More</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
