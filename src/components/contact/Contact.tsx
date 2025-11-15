import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const CONTACT_CARDS = [
  {
    icon: MdOutlineMail,
    title: "Email",
    subtitle: "daniel@schroter.biz",
    href: "mailto:daniel@schroter.biz",
    label: "Send an email",
  },
  {
    icon: BsLinkedin,
    title: "LinkedIn",
    subtitle: "Daniel Schroter Thüm",
    href: "https://www.linkedin.com/in/daniel-schroter/",
    label: "Send a LinkedIn message",
  },
] as const;

const Contact: React.FC = () => (
  <section id="contact" className="px-4">
    <div className="container mx-auto max-w-5xl">
      <h5 className="text-sm uppercase tracking-[0.4em] text-[var(--color-light)]">
        Get in touch
      </h5>
      <h2 className="mt-2 text-3xl font-light tracking-[0.4em] text-white">
        Contact Me
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {CONTACT_CARDS.map(({ icon: Icon, title, subtitle, href, label }) => (
          <article
            key={title}
            className="flex flex-col items-center gap-3 rounded-3xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)]/90 p-6 text-center shadow-2xl backdrop-blur transition hover:-translate-y-1"
          >
            <Icon className="text-3xl text-[var(--color-secondary)]" />
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-sm text-white/70">{subtitle}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm font-medium text-[var(--color-secondary)] underline-offset-4 hover:underline"
            >
              {label}
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
