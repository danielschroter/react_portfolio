import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const mlSkills = [
    "Python",
    "Pytorch",
    "R",
    "Deep Learning",
    "Machine Learning",
    "Transformer",
    "Explainable AI",
    "Natural Language Processing",
  ];
  const managementSkills = [
    "Business Development",
    "Pitching & Presentations",
    "Management Science",
    "Operations Research",
    "Agile Software Development",
    "Human Resource Management",
  ];
  const webDev = [
    "React",
    "Next JS",
    "TailwindCss",
    "MERN",
    "Docker",
    "GCP",
    "AWS S3",
    "Microservice",
  ];

  return (
    <section id="experience">
      <h5 className="text-sm">The Skills I have</h5>
      <h2 className="text-2xl tracking-widest font-thin">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="font-thin text-xl">Technology</h3>
          <div className="experience__content">
            {mlSkills.map((skill) => (
              <article className="px-4 py-2 border border-[var(--color-secondary)] rounded-3xl text-sm hover:scale-105 transition">
                {skill}
              </article>
            ))}
            {webDev.map((skill) => (
              <article className="px-4 py-2 border border-[var(--color-secondary)] rounded-3xl text-sm hover:scale-105 transition">
                {skill}
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="font-thin text-xl">Management</h3>
          <div className="experience__content">
            {managementSkills.map((skill) => (
              <article className="px-5 py-2 border border-[var(--color-secondary)] rounded-[30px] text-sm hover:scale-105 transition">
                {skill}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
