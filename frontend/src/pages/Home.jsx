import CTAButton from "../components/CTAButton.jsx";

function Home() {
  return (
    <>
      <section className="hero">
        <section className="hero-inner">
          <article>
            <span className="eyebrow">Formation · Sécurité · Prévention</span>
            <h1>Formations en sécurité routière et compétences professionnelles</h1>
            <p className="lead">
              FSPPA-Formation accompagne les entreprises, collectivités et particuliers dans la
              prévention des risques routiers et le développement des soft skills. Les thématiques
              proposées comprennent la sensibilisation à la sécurité routière, la gestion du stress,
              la prise de parole en public et la communication professionnelle.
            </p>
            <p className="hero-cta-row">
              <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
              <CTAButton to="/securite-routiere" variant="secondary">Découvrir les formations</CTAButton>
            </p>
          </article>
          <figure className="hero-visual"><img src="/media/route-prevention.svg" alt="Illustration originale d'une route de campagne, symbole de prévention et de mobilité" width="900" height="620" fetchPriority="high" /></figure>
        </section>
      </section>

      <section className="container">
        <ul className="quick-grid">
          <li className="quick-card">
            <span className="icon" aria-hidden="true">🚗</span>
            <h3>Formation sécurité routière</h3>
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
            <h3>Formation soft skills</h3>
            <p>Gestion du stress, prise de parole, analyse transactionnelle.</p>
            <a className="link" href="/soft-skills">Découvrir le module →</a>
          </li>
        </ul>
      </section>

      <section className="section">
        <section className="container section-narrow" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Notre mission</span>
          <h2>Prévenir les risques et développer les compétences au travail</h2>
          <p style={{ color: "var(--slate)" }}>
            Une double expertise de formateur mobilité et de délégué syndical, mobilisée pour
            des interventions concrètes en <a href="/securite-routiere/">prévention du risque routier professionnel</a> et en <a href="/soft-skills/">gestion du stress et communication au travail</a>.
          </p>
        </section>
      </section>

      <section className="section section-alt" aria-labelledby="questions-frequentes">
        <div className="container section-narrow">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 id="questions-frequentes">Comprendre nos interventions</h2>
          <h3>À qui s'adressent les formations FSPPA-Formation ?</h3>
          <p>Aux entreprises, collectivités et particuliers souhaitant travailler sur la prévention routière ou les compétences relationnelles et professionnelles.</p>
          <h3>Quels thèmes de sécurité routière sont abordés ?</h3>
          <p>La prévention du risque routier, la sensibilisation des conducteurs seniors, les addictions, la vigilance et les comportements de conduite.</p>
          <h3>Comment demander une intervention adaptée ?</h3>
          <p>Présentez votre besoin depuis la <a href="/contact/">page de contact</a> : un courriel prérempli s'ouvrira dans votre messagerie pour que vous puissiez l'envoyer vous-même.</p>
        </div>
      </section>

      <section className="container">
        <hr className="chevron-divider" style={{ marginBottom: 60 }} />
        <section className="cta-banner" style={{ marginBottom: 80 }}>
          <hgroup>
            <h2>Une entreprise, une collectivité, un besoin spécifique ?</h2>
            <p>Présentez votre besoin par e-mail afin de recevoir une réponse personnalisée.</p>
          </hgroup>
          <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
        </section>
      </section>
    </>
  );
}

export default Home;
