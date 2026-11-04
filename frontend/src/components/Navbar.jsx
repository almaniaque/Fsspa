import { useState } from "react";
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

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Navigation principale">
        <div className="img-nav">
          <img src="/media/fsppa_logo.webp" alt="FSPPA-Formation, retour à l’accueil" id="fsppa-logo" />
          <img src="/media/fsppa_texte.webp" alt="FSPPA-Formation" id="fsppa-text" />
        </div>
        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
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
