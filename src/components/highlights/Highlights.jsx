import React from "react";
import "./highlights.css";

const Highlights = () => {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="highlights mt-8">
      <h5 className="text-sm">Notable achievements</h5>
      <h2 className="text-2xl tracking-widest font-thin">Highlights</h2>

      <div className="container highlights__container">
        <ul className="highlights__list">
              <li 
            className="highlights__item"
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <strong>NLP & GenAI Solutions at <a href="https://statworx.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:cursor-pointer ">statworx</a></strong>
            <p className="highlights__detail">
              Worked on multiple enterprise AI projects across automotive, manufacturing, pharma and insurance – standout highlights include an automated negotiation agent, a real-time multi-agent voice assistant, and customer support automation with advanced RAG.
            </p>
          </li>
          <li 
            className="highlights__item"
            onMouseMove={(e) => handleOnMouseMove(e)}
          >
            <strong>SemEval-2023 Task 4 Winner</strong>
            <p className="highlights__detail">
              Built the best-performing system for human value detection (<span className="font-bold">1st of 41 teams</span>). 
              Published at ACL 2023 · Released on Hugging Face (<span className="font-bold">23k+</span> downloads)
            </p>
          </li>
        
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
