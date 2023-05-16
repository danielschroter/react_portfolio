import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-sm">The Skills I have</h5>
      <h2 className="text-2xl tracking-widest font-thin">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="font-thin text-xl">Technology</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Python</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />

              <div>
                <div>Deep Learning & Machine Learning</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Natural Language Processing</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Cost Sensitive Learning</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Explainable AI</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Rasa</div>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Web Development - MERN Stack</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Java | R | React | JavaScript | Docker | MongoDB</div>
                {/*<small className="text-light">Intermediate</small>*/}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="font-thin text-xl">Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Entrepreneurial Thinking</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Statistics</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Management Science</div>
                {/*<small className="text-light">Intermediate</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Operations Management</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Business Development</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Pitching & Presentations</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <div>Human Resource Management</div>
                {/*<small className="text-light">Experienced</small>*/}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
