import React from "react";
import Keywords from "./Keywords";

function Promptic(props) {
  return (
    <div>
      <div className="porfolio__modal-btn">
        <a
          href="https://promptic.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          See Website
        </a>
      </div>

      <div className="portfolio__modal-para">
        <Keywords words={props.words} />
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading mt-10 text-xl">Problem:</h3>
        <p>
          <b>
            The optimization of prompts for Large Language Models is a critical
            yet challenging task. Engineers often face a complex,
            time-consuming, and manual process of trial-and-error. It's
            difficult to systematically evaluate and improve prompts based on
            specific business metrics and tailored to their own data, which
            often leads to suboptimal performance of the models.
          </b>
        </p>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading mt-10 text-xl">Solution:</h3>
        <p>
          <b>
            Promptic offers a simple, powerful, and analytics-driven platform
            that puts prompt engineering on the road to success. It provides an
            automated, one-click optimization process based on your own business
            data and metrics. Without any coding required, you can upload your
            data, provide an initial prompt, and let Promptic iteratively refine
            it using sophisticated deep-learning models. The result is a highly
            accurate and tailored prompt that elevates your foundation models,
            and unlocks their full potential for your specific use case.
          </b>
        </p>
      </div>
    </div>
  );
}

export default Promptic;
