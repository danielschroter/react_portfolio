import React from "react";

function Keywords(props) {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2 gap-x-4 text-xs justify-center ">
        {props.words.map(function (item, index) {
          return (
            <article key={index} className="px-4 py-2 text-[1rem] rounded-full bg-slate-600/20 backdrop-blur-2xl">
              {/* <BsPatchCheckFill className="portfolio__modal-details-icon"/> */}
              <div>
                <h5>{item}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Keywords;
