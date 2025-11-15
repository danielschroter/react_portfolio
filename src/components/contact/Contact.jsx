import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const cards = document.querySelectorAll(".contact__option");
      
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
    <section id="contact">
      <h5 className="text-sm">Get In Touch</h5>
      <h2 className="text-2xl tracking-widest font-thin">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>daniel@schroter.biz</h5>
            <a
              href="mailto:daniel@schroter.biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Daniel Schroter Thüm</h5>
            <a
              href="https://www.linkedin.com/in/daniel-schroter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
