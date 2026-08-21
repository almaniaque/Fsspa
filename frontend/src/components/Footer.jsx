import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <section className="container">
        <section className="footer-grid">
          <section aria-labelledby="footer-about-heading">
            <h4 id="footer-about-heading">FSPPA-Formation</h4>
            <p style={{ color: "#a8bcd6", maxWidth: "38ch", fontSize: "0.92rem" }}>
              20 ans d'engagement au service de la sécurité routière, de la prévention des risques
              et du développement des compétences psychosociales. Formateur & Délégué Syndical.
            </p>
          </section>
          <section aria-labelledby="footer-nav-heading">
            <h4 id="footer-nav-heading">Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/securite-routiere">Sécurité Routière</Link></li>
              <li><Link to="/soft-skills">Soft Skills</Link></li>
              <li><Link to="/a-propos">À Propos</Link></li>
              <li><Link to="/contact">Contact & Devis</Link></li>
            </ul>
          </section>
          <section aria-labelledby="footer-contact-heading">
            <h4 id="footer-contact-heading">Contact</h4>
            <ul>
              <li>Joël Thiébaut</li>
              <li><a href="mailto:contact@fsppa-formation.fr">contact@fsppa-formation.fr</a></li>
              <li><Link to="/contact">Demander un devis</Link></li>
            </ul>
          </section>
        </section>

        <section className="footer-bottom">
          <span>© {new Date().getFullYear()} FSPPA-Formation — Micro-entreprise</span>
          <span>
            <Link to="/mentions-legales">Mentions légales</Link>
            {" · "}
            <Link to="/politique-confidentialite">Politique de confidentialité (RGPD)</Link>
          </span>
        </section>

        <section className="footer-credit">
          <img src="/media/neoforge-logo-vertical.svg" alt="Néo-Forge-Studio" />
          <span>Site conçu par <strong>Néo-Forge-Studio</strong> — Développeur web &amp; mobile freelance</span>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
