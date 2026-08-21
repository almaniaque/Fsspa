import CTAButton from "../components/CTAButton.jsx";

function Home() {
  return (
    <>
      <section className="hero">
        <section className="hero-inner">
          <article>
            <span className="eyebrow">Formation · Sécurité · Prévention</span>
            <h1>Prévenir les risques, transmettre l'expérience, libérer le potentiel humain.</h1>
            <p className="lead">
              Bienvenue sur FSPPA-Formation. Fort d'un engagement de plus de 20 ans sur le terrain
              de la transmission, de la mobilité et de la prévention, j'accompagne les entreprises,
              les collectivités et les particuliers à travers des modules de formation pointus et
              sur-mesure.
            </p>
            <p className="hero-cta-row">
              <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
              <CTAButton href="/catalogue-fsppa-formation.pdf" variant="secondary">
                Télécharger le catalogue
              </CTAButton>
            </p>
          </article>
          <figure className="hero-visual" role="img" aria-label="Joël Thiébaut en situation de formation">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#9db6d6", textAlign: "center", padding: "0 24px" }}>
              [ Photo à intégrer — Joël Thiébaut en situation de formation ou visuel conceptuel d'une route dégagée ]
            </span>
          </figure>
        </section>
      </section>

      <section className="container">
        <ul className="quick-grid">
          <li className="quick-card">
            <span className="icon" aria-hidden="true">🚗</span>
            <h3>Sécurité Routière</h3>
            <p>Sensibilisation aux risques routiers, seniors, addictions et conduite.</p>
            <a className="link" href="/securite-routiere">Découvrir le module →</a>
          </li>
          <li className="quick-card">
            <span className="icon" aria-hidden="true">🎯</span>
            <h3>Formations Spécifiques</h3>
            <p>Modules pointus et sur-mesure adaptés à votre secteur d'activité.</p>
            <a className="link" href="/contact">Demander un programme →</a>
          </li>
          <li className="quick-card">
            <span className="icon" aria-hidden="true">🗣️</span>
            <h3>Soft Skills</h3>
            <p>Gestion du stress, prise de parole, analyse transactionnelle.</p>
            <a className="link" href="/soft-skills">Découvrir le module →</a>
          </li>
        </ul>
      </section>

      <section className="section">
        <section className="container section-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Notre mission</span>
          <h2>Prévenir les risques, maîtriser l'environnement professionnel, et libérer votre potentiel humain.</h2>
          <p style={{ color: "var(--slate)" }}>
            Une double expertise terrain — formateur mobilité et délégué syndical — au service
            d'une pédagogie concrète, humaine et immédiatement applicable.
          </p>
        </section>
      </section>

      <section className="container">
        <hr className="chevron-divider" style={{ marginBottom: 60 }} />
        <section className="cta-banner" style={{ marginBottom: 80 }}>
          <hgroup>
            <h2>Une entreprise, une collectivité, un besoin spécifique ?</h2>
            <p>Recevez une proposition d'intervention adaptée à votre contexte sous 48h.</p>
          </hgroup>
          <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
        </section>
      </section>
    </>
  );
}

export default Home;
