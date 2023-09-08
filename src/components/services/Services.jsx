import React from "react";
import "./services.css";
import { GrTarget } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FiTarget } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="text-sm">What I offer</h5>
      <h2 className="text-2xl tracking-widest font-thin">Services</h2>

      <div className="container">
        <div>
          <FiTarget size={30} className="text-secondary  shrink-0" />
          Your AI & Deep Learning Partner
        </div>
      </div>
    </section>
  );
};

export default Services;
