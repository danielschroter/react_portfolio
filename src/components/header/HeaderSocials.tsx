import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/daniel-schroter/",
    label: "Connect on LinkedIn",
    Icon: BsLinkedin,
  },
  {
    href: "https://github.com/danielschroter",
    label: "View GitHub profile",
    Icon: FaGithub,
  },
  {
    href: "https://www.instagram.com/daniel.schroter/",
    label: "Follow on Instagram",
    Icon: GrInstagram,
  },
] as const;

const HeaderSocials: React.FC = () => (
  <div className="hidden flex-col items-center gap-4 text-white md:flex">
    {SOCIAL_LINKS.map(({ href, label, Icon }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="rounded-full border border-white/20 p-3 text-white/70 transition hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]"
      >
        <Icon />
      </a>
    ))}
    <span className="block h-8 w-px bg-[var(--color-primary)]" aria-hidden="true"></span>
  </div>
);

export default HeaderSocials;
