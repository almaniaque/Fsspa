import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CTAButton from "./CTAButton.jsx";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/securite-routiere", label: "Sécurité Routière" },
  { to: "/soft-skills", label: "Soft Skills" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact & Devis" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = "navigation-fsppa";
  const navRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        navRef.current?.querySelector(".nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="navbar">
      <nav ref={navRef} className="navbar-inner" aria-label="Navigation principale">
        <NavLink to="/" end className="img-nav" aria-label="FSPPA-Formation — Accueil" onClick={() => setOpen(false)}>
          <img src="/media/fsppa_logo.webp" alt="" id="fsppa-logo" width="100" height="100" decoding="async" />
          <span className="brand-wordmark">
            <span className="brand-name">FSPPA-Formation</span>
            <span className="brand-tagline">Formation et sensibilisation en milieu professionnel</span>
          </span>
        </NavLink>
        <button
          className="nav-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-controls={menuId}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <ul id={menuId} className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-cta">
            <CTAButton to="/contact" variant="primary">
              Demander une intervention
            </CTAButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
