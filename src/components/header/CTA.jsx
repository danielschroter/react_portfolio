import React from "react";
import CV from "../../assets/CV_DanielSchroter_2023.pdf";

const CTA = () => {
  return (
    <div className="flex felx-row gap-5 items-center justify-center mt-5">
      {/* <a href={CV} download className='btn'>Download CV</a> */}
      <a
        href={CV}
        download
        className=" text-sm text-cyan-400/60 px-3 py-2 rounded-lg bg-slate-600/20 backdrop-blur-lg hover:bg-slate-600/10 shadow-lg"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="border relative border-cyan-400/60 text-gray-300 px-3 shadow-lg py-2 text-sm rounded-lg hover:bg-gray-800/20 hover:border-gray-100 hover:cursor-pointer transition"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
