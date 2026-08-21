import CTAButton from "../components/CTAButton.jsx";
import Accordion from "../components/Accordion.jsx";

const modules = [
  {
    title: "Formation en sécurité routière & sensibilisation aux risques routiers",
    content: (
      <p>
        Le risque routier est la première cause de mortalité au travail. Nos interventions visent
        à modifier durablement les comportements au volant par une prise de conscience des
        facteurs de risques professionnels et privés.
      </p>
    ),
  },
  {
    title: "Sensibilisation pour les seniors",
    content: (
      <p>
        Actualisation des connaissances du Code de la route, maintien de l'autonomie et gestion
        des nouvelles infrastructures pour une conduite sereine et durable.
      </p>
    ),
  },
  {
    title: "Addictions et conduite",
    content: (
      <>
        <p>
          Alcool, stupéfiants, médicaments, distractions technologiques. Analyse précise de
          l'impact des substances sur les temps de réaction et sur la perception visuelle.
        </p>
        <aside className="stat-callout">
          <span className="formula">d = v × t</span>
          <p>Distance parcourue pendant le temps de réaction — un repère concret utilisé en formation.</p>
        </aside>
      </>
    ),
  },
];

function SecuriteRoutiere() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <section className="container">
          <span className="eyebrow">Cœur de métier</span>
          <h1 style={{ maxWidth: "18ch" }}>Sécurité & Risques Routiers</h1>
          <p style={{ maxWidth: "62ch", fontSize: "1.05rem" }}>
            Trois sous-modules complémentaires pour agir sur les comportements, la vigilance et
            la prévention au volant — en entreprise, en collectivité, ou à titre individuel.
          </p>
        </section>
      </section>

      <section className="section section-alt">
        <section className="container">
          <span className="chevron-rule"><span /></span>
          <Accordion items={modules} />
        </section>
      </section>

      <section className="section">
        <section className="container">
          <section className="two-col">
            <figure className="placeholder-visual" aria-hidden="true">
              [ Icône vectorielle — volant / flèche de courbe de vigilance ]
            </figure>
            <figure className="placeholder-visual" aria-hidden="true">
              [ Icône vectorielle — pictogramme sénior / molécules addiction ]
            </figure>
          </section>
        </section>
      </section>

      <section className="container">
        <section className="cta-banner" style={{ marginBottom: 80 }}>
          <hgroup>
            <h2>Sensibilisez vos équipes au risque routier professionnel</h2>
            <p>Un module d'intervention conçu pour transformer durablement les comportements.</p>
          </hgroup>
          <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
        </section>
      </section>
    </>
  );
}

export default SecuriteRoutiere;
