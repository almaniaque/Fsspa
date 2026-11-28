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
          <h1 style={{ maxWidth: "22ch" }}>Formation et prévention du risque routier</h1>
          <p style={{ maxWidth: "62ch", fontSize: "1.05rem" }}>
            Sensibilisation à la sécurité routière en entreprise, en collectivité ou à titre individuel :
            des modules consacrés au risque routier professionnel, à la vigilance et aux comportements au volant.
          </p>
        </section>
      </section>

      <section className="section section-alt" aria-labelledby="formations-routieres">
        <section className="container">
          <h2 id="formations-routieres">Nos modules de sensibilisation à la sécurité routière</h2>
          <p>Les interventions abordent les situations de conduite rencontrées au travail et dans la vie quotidienne. Découvrez les thèmes proposés, puis précisez votre contexte pour préparer une demande d'intervention.</p>
          <span className="chevron-rule"><span /></span>
          <Accordion items={modules} />
        </section>
      </section>

      <section className="section">
        <section className="container">
          <h2>Pourquoi sensibiliser au risque routier professionnel ?</h2>
          <p>Les trajets réalisés dans le cadre du travail et les déplacements domicile-travail exposent les conducteurs à des risques variés. Une action de prévention permet d'aborder les distractions, la fatigue, les addictions et le temps de réaction à partir de situations concrètes.</p>
          <p>La démarche peut être adaptée à différents publics : salariés amenés à conduire, équipes encadrantes, collectivités ou conducteurs souhaitant actualiser leurs connaissances.</p>
          <section className="two-col visual-pair">
            <figure className="editorial-visual"><img src="/media/route-prevention.svg" alt="Scène illustrée de circulation routière et prévention des risques" loading="lazy" width="900" height="620" /><figcaption>Anticipation et prévention des risques routiers</figcaption></figure>
            <figure className="editorial-visual"><img src="/media/vigilance.svg" alt="Illustration pédagogique du conducteur, de son attention et de son temps de réaction" loading="lazy" width="900" height="620" /><figcaption>Vigilance, attention et conduite responsable</figcaption></figure>
          </section>
        </section>
      </section>

      <section className="container">
        <h2>Préparer une formation au risque routier</h2>
        <p>Pour étudier une intervention, indiquez le profil des participants, les principaux risques rencontrés et les objectifs recherchés. Consultez également nos <a href="/soft-skills/">formations en communication et gestion du stress au travail</a> lorsque la prévention s'inscrit dans une démarche plus large.</p>
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
