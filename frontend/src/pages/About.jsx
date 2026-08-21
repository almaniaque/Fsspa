import CTAButton from "../components/CTAButton.jsx";

function About() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 20 }}>
        <section className="container">
          <span className="eyebrow">Notre approche</span>
          <h1 style={{ maxWidth: "20ch" }}>À propos de FSPPA-Formation</h1>
        </section>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <section className="container">
          <section className="two-col" style={{ alignItems: "start" }}>
            <article>
              <blockquote className="quote-block">
                Derrière FSPPA-Formation se trouve Joël Thiébaut, Formateur Mobilité et Délégué
                Syndical doté de 20 années d'engagement quotidien. Cette double expertise terrain
                offre une vision unique des relations humaines et de la sécurité.
              </blockquote>
              <p>
                Notre approche pédagogique repose sur la co-construction, l'écoute active et
                l'apport d'outils immédiatement applicables dans votre quotidien professionnel.
              </p>
              <CTAButton to="/contact" variant="secondary">Demander une intervention</CTAButton>
            </article>

            <ol className="timeline">
              <li className="timeline-item">
                <span className="eyebrow" style={{ marginBottom: 4 }}>Terrain</span>
                <h3>Formateur Mobilité</h3>
                <p>Plus de 20 ans d'engagement sur les enjeux de sécurité routière et de prévention.</p>
              </li>
              <li className="timeline-item">
                <span className="eyebrow" style={{ marginBottom: 4 }}>Dialogue social</span>
                <h3>Délégué Syndical</h3>
                <p>Une expérience directe des relations humaines et des dynamiques d'équipe en entreprise.</p>
              </li>
              <li className="timeline-item">
                <span className="eyebrow" style={{ marginBottom: 4 }}>Aujourd'hui</span>
                <h3>FSPPA-Formation</h3>
                <p>Des modules sur-mesure pour entreprises, collectivités et particuliers.</p>
              </li>
            </ol>
          </section>
        </section>
      </section>

      <section className="section section-alt">
        <section className="container">
          <hgroup className="section-head center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>Nos valeurs</span>
            <h2>Une pédagogie fondée sur l'écoute et l'action</h2>
          </hgroup>
          <ul className="values-grid">
            <li className="value-card">
              <span className="eyebrow">01</span>
              <h3>Co-construction</h3>
              <p>Des formations pensées avec vos équipes, ancrées dans vos réalités de terrain.</p>
            </li>
            <li className="value-card">
              <span className="eyebrow">02</span>
              <h3>Écoute active</h3>
              <p>Une posture d'accompagnement, jamais descendante, pour favoriser l'adhésion.</p>
            </li>
            <li className="value-card">
              <span className="eyebrow">03</span>
              <h3>Application immédiate</h3>
              <p>Des outils concrets, mobilisables dès le lendemain dans votre quotidien professionnel.</p>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default About;
