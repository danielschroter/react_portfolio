import React from "react";
import Keywords from "./Keywords";
import { IoIosRocket } from "react-icons/io";
import OnePagerScreen from "../../assets/onePagerScreenshot.jpg";
function AiOnePager(props) {
  return (
    <div>
      <div className="porfolio__modal-btn">
        <a
          href="https://aionepager.schroter.eu"
          target="_blank"
          className="btn btn-primary"
        >
          Demo
        </a>
        <a href={props.git} className="btn btn-secondary" target="_blank">
          Github
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
            CV's, OnePager, Intranet are hard to maintain and often outdated
          </b>
        </p>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading mt-10 text-xl">Solution:</h3>
        <p>
          <b>
            Upload your Documents. We extract your skills and automatically
            generate an OnePager selling you as the expert that you are!
          </b>
        </p>
      </div>

      <div className="portfolio__modal-p21-features">
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>Secure</h4>
          </div>
        </article>
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>Automated</h4>
          </div>
        </article>
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>Easy</h4>
          </div>
        </article>
      </div>

      <div className="flex items-center justify-center mt-10">
        <a
          href="https://aionepager.schroter.eu"
          target="_blank"
          className="btn btn-primary "
        >
          Try it yourself!
        </a>
      </div>

      <div className="portfolio__modal-para mt-10">
        <div className="porfolio__modal-para-grid">
          <div className="porfolio__modal-image-div">
            <img
              className="portfolio__modal-image"
              src={OnePagerScreen}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiOnePager;
