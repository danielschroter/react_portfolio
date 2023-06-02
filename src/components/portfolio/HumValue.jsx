import React from "react";
import Keywords from "./Keywords";
import Paper from "../../assets/HumEvalSchroter.pdf";
import Slides from "../../assets/Final_presentation.pdf";
import { IoIosRocket } from "react-icons/io";
import { FaAward } from "react-icons/fa";

function HumValue(props) {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <FaAward className="about__icon text-3xl" />
      </div>
      <div className="porfolio__modal-btn btn-expai">
        <a
          href="https://value-detector.schroter.eu/"
          download
          className="btn btn-primary"
        >
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
          "We should ban whaling, whaling is wiping out species for little in
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
            <h4>
              Competition Winning System in SemEval 2023 workshop (alias Adam
              Smith).
            </h4>
          </div>
        </article>
        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>F1 Score of 0.56. Beating the baseline by 33%</h4>
          </div>
        </article>

        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>
              LIME captures inner working of model and delivering human
              understandable explanations
            </h4>
          </div>
        </article>

        <article className="portfolio__modal-details">
          <IoIosRocket className="portfolio__modal-details-icon" />
          <div>
            <h4>LIME shows higher plausibility and faithfulness than LOCO</h4>
          </div>
        </article>
      </div>

      <div className="portfolio__modal-para">
        <h3 className="portfolio__modal-heading">Example:</h3>

        <p style={{ "margin-top": "1rem" }}>
          <b>The Argument: </b>
          "We should{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            ban
          </span>{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.35)" }}>
            whaling
          </span>
          ,{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.35)" }}>
            whaling{" "}
          </span>
          is{" "}
          <span style={{ "background-color": "rgba(229, 143, 0, 0.7)" }}>
            wiping{" "}
          </span>
          <span style={{ "background-color": "rgba(229, 143, 0, 0.2)" }}>
            out{" "}
          </span>
          <span style={{ "background-color": "rgba(229, 143, 0, 0.7)" }}>
            species{" "}
          </span>
          for little in return."
        </p>
        <p style={{ "margin-top": "1rem" }}>
          <b>Human Value: </b> Universalsim nature (confidence: 0.92)
        </p>

        <p style={{ "margin-top": "1rem" }}>
          <b>Explanations:</b> Top{" "}
          <span style={{ color: "rgba(229, 143, 0, 0.8)" }}>
            <b> 3</b>
          </span>{" "}
          most important terms make up
          <span style={{ color: "rgba(229, 143, 0, 0.8)" }}>
            <b> 0.78 </b>
          </span>{" "}
          of the models confidence
        </p>

        <p style={{ "margin-top": "1rem" }}>
          <b>Explanation:</b> The words in orange contribute to a confidence
          score, We can see how the considers the words "ban", "whaling",
          "wiping out" as important for the predicition "protecting the
          environent" (univesalism nature). We can capture the importance of the
          explanations with the concept of faithfulness. Faithfulness indicates
          how well the explanation captures the inner working of the model.
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
