import CTAButton from "../components/CTAButton.jsx";

const skills = [
  {
    tag: "Bien-être au travail",
    title: "Gestion du Stress",
    text: "Apprendre à identifier les mécanismes du stress professionnel, réguler l'impact émotionnel et acquérir des outils d'ancrage opérationnels pour préserver la santé au travail.",
  },
  {
    tag: "Communication",
    title: "Prise de Parole en Public",
    text: "Maîtriser sa posture, sa voix et sa rhétorique. Structurer son discours pour captiver son auditoire et désamorcer le trac légitime.",
  },
  {
    tag: "Relations & management",
    title: "Analyse Transactionnelle",
    text: "Décoder les grilles de lecture relationnelles (États du Moi : Parent, Adulte, Enfant) pour assainir la communication interpersonnelle, optimiser le management et désamorcer les jeux psychologiques stériles en équipe.",
  },
];

function SoftSkills() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <section className="container">
          <span className="eyebrow">Compétences psychosociales</span>
          <h1 style={{ maxWidth: "24ch" }}>Formation soft skills : gestion du stress et communication</h1>
          <p style={{ maxWidth: "62ch", fontSize: "1.05rem" }}>
            Des formations aux compétences relationnelles et psychosociales : gestion du stress au travail,
            prise de parole en public et analyse transactionnelle pour améliorer les échanges en équipe.
          </p>
        </section>
      </section>

      <section className="section section-alt">
        <section className="container">
          <section className="two-col" style={{ marginBottom: 40, alignItems: "center" }}>
            <article>
              <span className="eyebrow">Approche pédagogique</span>
              <h2>Des outils concrets, immédiatement applicables au quotidien professionnel</h2>
              <p>
                Chaque module combine apports théoriques courts et mises en situation, pour ancrer
                durablement les nouveaux réflexes relationnels et comportementaux.
              </p>
            </article>
            <figure className="editorial-visual"><img src="/media/atelier-collectif.svg" alt="Illustration originale d'un atelier de formation collaborative autour d'une table" loading="lazy" width="900" height="620" /><figcaption>Communication et apprentissage collectif</figcaption></figure>
          </section>

          <h2>Trois thématiques de formation pour les équipes</h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: 20, listStyle: "none", margin: 0, padding: 0 }}>
            {skills.map((skill) => (
              <li className="skill-block" key={skill.title}>
                <span className="tag">{skill.tag}</span>
                <h3 style={{ marginTop: 8 }}>{skill.title}</h3>
                <p>{skill.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="container">
        <div className="section" style={{ paddingBottom: 0 }}>
          <h2>À qui s'adressent les formations en soft skills ?</h2>
          <p>Les modules peuvent répondre à des besoins d'expression orale, de gestion des tensions ou de communication au travail. Les objectifs sont à définir selon le public, le contexte professionnel et les situations rencontrées.</p>
          <h2>Comment choisir entre gestion du stress et communication ?</h2>
          <p>La formation en gestion du stress s'intéresse aux réactions face aux situations exigeantes ; la prise de parole travaille la préparation et la présentation d'un message ; l'analyse transactionnelle propose des repères pour comprendre les échanges interpersonnels.</p>
          <p>Ces sujets peuvent compléter une démarche de <a href="/securite-routiere/">prévention du risque routier en entreprise</a> lorsque vigilance, comportements et relations professionnelles sont abordés ensemble.</p>
        </div>
        <section className="cta-banner" style={{ marginTop: 60, marginBottom: 80 }}>
          <hgroup>
            <h2>Renforcez la cohésion et la sérénité de vos équipes</h2>
            <p>Programmes personnalisables selon vos enjeux managériaux et relationnels.</p>
          </hgroup>
          <CTAButton to="/contact" variant="primary">Demander une intervention</CTAButton>
        </section>
      </section>
    </>
  );
}

export default SoftSkills;
