import React from "react";
import "./services.css";
import { FiTarget } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="text-sm">What I offer</h5>
      <h2 className="text-2xl tracking-widest font-thin">Services</h2>

      <div className="container">
        <div>
          <div className="flex gap-6 items-center">
            <FiTarget size={40} className="text-secondary  shrink-0" />
            <span className="text-lg font-semibold">
              Strategic AI Consulting & Use Case Definition
            </span>
          </div>
          <p className="mt-4">
            Understand the potential and limitations of AI in your business
            context. I'll help you devise a roadmap that aligns with your goals
            and ensures long-term success.
          </p>
        </div>
        <div className="text-right mt-12">
          <div className="flex gap-6 items-center justify-end">
            <FiTarget size={40} className="text-secondary  shrink-0" />
            <span className="text-lg font-semibold">
              AI Automation & Optimization:
            </span>
          </div>
          <p className="mt-4">
            In the age of digital transformation, leverage AI to streamline your
            processes, make informed decisions, and innovate. From custom deep
            learning development to chatbots and e-mail automation.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex gap-6 items-center ">
            <FiTarget size={40} className="text-secondary  shrink-0" />
            <span className="text-lg font-semibold">
              End-to-End Implementation
            </span>
          </div>
          <p className="mt-4">
            With expertise in the latest frameworks and technologies, I'll bring
            your AI vision to life, ensuring that the solutions not only work
            but excel.
          </p>
        </div>

        <div className="font- italic mt-12">
          Every business and project is unique. Whether you need a one-time
          consultation or a hands-on implementation partner, I'll meet you
          wherever you are in your AI journey.
        </div>
        <div className="mt-4">
          <a
            href="#contact"
            className="border-secondary border-2 px-3 rounded-2xl py-2"
          >
            {" "}
            Book Call{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
