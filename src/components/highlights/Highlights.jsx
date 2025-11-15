import React, { useEffect } from "react";
import "./highlights.css";

const Highlights = () => {
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const cards = document.querySelectorAll(".highlights__item");
      
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

  return (
    <section id="highlights mt-8">
      <h5 className="text-sm">Professional highlights</h5>
      <h2 className="text-2xl tracking-widest font-thin">Highlights</h2>

      <div className="container highlights__container">
        <ul className="highlights__list">
          <li 
            className="highlights__item" key={"promptic"}
          >
            <strong>Co-founding <a href="https://promptic.eu" target="_blank" rel="noopener noreferrer" className="font-bold">Promptic</a></strong>
            <p className="highlights__detail">
              Building an AI prompt optimization platform to help enterprises scale GenAI deployment through automated, metric-driven optimization
            </p>
          </li>
          <li 
            className="highlights__item" key={"statworx"}
          >
            <strong>NLP & GenAI Solutions at <a href="https://statworx.com" target="_blank" rel="noopener noreferrer" className="font-bold">statworx</a></strong>
            <p className="highlights__detail">
              Developed AI/NLP solutions for 8+ enterprise projects across automotive, manufacturing, pharma and insurance – responsible for core AI development on an automated negotiation agent, a real-time multi-agent voice assistant, and advanced RAG for customer support
            </p>
          </li>
          <li 
            className="highlights__item" key={"semeval"}
          >
            <strong>SemEval-2023 Task 4 Winner</strong>
            <p className="highlights__detail">
              Built the best-performing system for human value detection (<span className="font-bold">1st of 41 teams</span>). 
              <a href="https://aclanthology.org/2023.semeval-1.74/" target="_blank" rel="noopener noreferrer" className="font-bold"> Published </a>at ACL 2023 · Released on Hugging Face (<span className="font-bold">23k+</span> downloads)
            </p>
          </li>
        
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
