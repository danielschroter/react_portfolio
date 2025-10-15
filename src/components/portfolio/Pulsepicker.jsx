import React from "react";
import Keywords from "./Keywords";
function PulsePicker(props) {
  return (
    <div>
      <div className="porfolio__modal-btn">
        <a
          href="https://pulsepicker.schroter.eu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Try it yourself!
        </a>
      </div>

      <div className="portfolio__modal-para">
        <Keywords words={props.words} />
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading mt-10 text-xl">Problem:</h3>
        <p></p>
        <p>
          <b>
            As a data science consultant, I often need to stay up to date with
            the latest research in my field. This is a challenge in the fast
            paced world of AI. No Newsletter exist that provide me with the
            research relevant to the specific project needs I have as a
            consultant.
          </b>
        </p>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading mt-10 text-xl">Solution:</h3>
        <p>
          <b>
            A highly customizable research newsletter that is configurable to
            very specific knowledge needs. You can subscribe to any topic of
            your choice. An AI Agent screens the latest research papers on arXiv
            and sends you a weekly summary.
          </b>
        </p>
      </div>
    </div>
  );
}

export default PulsePicker;
