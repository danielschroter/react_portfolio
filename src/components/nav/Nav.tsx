import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiBrain, BiMessageSquareDetail } from "react-icons/bi";

const NAV_ITEMS = [
  { href: "/#", icon: AiOutlineHome, label: "Home" },
  { href: "#about", icon: AiOutlineUser, label: "About" },
  { href: "#experience", icon: BiBrain, label: "Experience" },
  { href: "#portfolio", icon: BiBookAlt, label: "Portfolio" },
  { href: "#contact", icon: BiMessageSquareDetail, label: "Contact" },
] as const;

const Nav: React.FC = () => {
  const [active, setActive] = useState("/#");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_20px_50px_rgba(8,7,16,0.4)] backdrop-blur-xl transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Main navigation"
      aria-hidden={!isVisible}
    >
      <ul className="flex items-center gap-3 text-lg text-white">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive = active === href;
          return (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(href)}
                aria-label={`Navigate to ${label}`}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
