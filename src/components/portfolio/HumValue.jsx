import React from "react";
import Keywords from "./Keywords";
import Paper from "../../assets/key-point-analysis-and-explanations-for-quantitative-text-analysis.pdf";
import Slides from "../../assets/Final_presentation.pdf";
import { IoIosRocket } from "react-icons/io";

function HumValue(props) {
  return (
    <div>
      <div className="porfolio__modal-btn btn-expai">
        <a href={Paper} download className="btn btn-primary">
          Demo
        </a>
        <a href={Paper} download className="btn btn-tertiary">
          Download Paper
        </a>
        <a href={props.git} className="btn btn-secondary" target="_blank">
          Github
        </a>
      </div>

      <div className="portfolio__modal-para">
        <Keywords words={props.words} />
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading">Goal:</h3>
        <p>
          We should ban whaling, whaling is wiping out species for little in
          return." say some, "We shouldn’t, it is part of a great number of
          cultures." say others. Both arguments support their claim, but why are
          some arguments more convincing to us than others? This might relate to
          the underlying values they address. The task of identifying human
          values in arguments plays a crucial role in media, debates and
          policy-making.
        </p>
      </div>

      <h3 className="portfolio__modal-heading">Performance:</h3>
      <div className="portfolio__modal-achievements">
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>Competition Winning System in SemEval 2023 workshop.</h4>
          </div>
        </article>
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>Beating baseline by 33%</h4>
          </div>
        </article>

        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>
              LIME capturing inner working of model and delivering human
              understandable explanations
            </h4>
          </div>
        </article>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading">Example:</h3>

        <p>
          We modified LIME to work with Siamese Neural Networks. Thereby we get
          an understanding why the model makes certain decisions.
          <br />
          Let's have a look at an example:
        </p>
        <p style={{ "margin-top": "1rem" }}>
          <b>The Argument:</b> The United States{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            is
          </span>{" "}
          undoubtedly the{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.35)" }}>
            richest
          </span>
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            {" "}
            country
          </span>{" "}
          that exists, its{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.7)" }}>
            income
          </span>
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            {" "}
            is{" "}
          </span>
          really{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.3)" }}>
            high{" "}
          </span>
          and{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.3)" }}>
            higher
          </span>{" "}
          than that of any other{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.3)" }}>
            country
          </span>
          , apart from being one of the{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            main
          </span>{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.7)" }}>
            {" "}
            productive
          </span>
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            {" "}
            countries{" "}
          </span>
          on the{" "}
          <span style={{ "background-color": "rgba(61,149,187,0.43)" }}>
            planet
          </span>
          .
        </p>
        <p style={{ "margin-top": "1rem" }}>
          <b>Key-Point:</b> The US has a good economy/high standard of living.
        </p>

        <p style={{ "margin-top": "1rem" }}>
          <b>Prediction probabilities:</b>{" "}
          <span style={{ color: "rgba(229, 143, 0, 0.8)" }}>
            <b>Similar</b>
          </span>{" "}
          0.78 ,{" "}
          <span style={{ color: "rgba(61,149,187, 0.8)" }}>
            <b>Dissimilar</b>
          </span>{" "}
          0.22.
        </p>

        <p style={{ "margin-top": "1rem" }}>
          <b>Explanation:</b> The words in orange contribute to a high
          similarity score, whereas the blue words work against a matching. Even
          though the words "income" and "productive country" are not part of the
          key-point, the model has learned that they represent concepts of a
          "good economoy" and a "high standard of living".
        </p>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading">Abstract:</h3>

        <p>
          Whether an argument is in agreement or disagreement with our personal
          values influences its ability to persuade. This relation plays a
          crucial role in media, debates and policy-making. As part of this
          thesis we participated in the SemEval-2023 Task 4: "Identification of
          Human Values behind Arguments". The goal of the task was to create
          systems that automatically identify the values behind arguments. Our
          system showed the best performance among the submissions of 39
          research teams. However, in many application scenarios models do not
          only need to deliver good performances but also need to be
          understandable by humans. For the identification of human values in
          media Scharfbillig et al., 2021 explicitly avoid modern machine
          learning techniques because they lack the feature of interpretability.
          In this study we close this gap by not only presenting the competition
          winning system but also employing techniques from the field of
          explainable AI. We show that the suggested explanations capture the
          inner working mechanism of the system and conduct a survey to
          demonstrate that they are in fact understandable by humans.
        </p>
      </div>
    </div>
  );
}

export default HumValue;
