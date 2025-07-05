import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LogoSvg from "/icon.svg"; 

interface Section {
  id: string;
  label: string;
}

interface NavbarProps {
  pageSections: Section[];
}

export default function Navbar({ pageSections }: NavbarProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${show ? "navbar--visible" : "navbar--hidden"}`}>
      <div className="navbar-left">
        <a href="#hero" className="logo" onClick={scrollToSection("hero")}>
          <img src={LogoSvg} alt="Logo" width={64} />
        </a>
        {pageSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-link"
            onClick={scrollToSection(id)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="navbar-right">
      </div>
    </nav>
  );
}
