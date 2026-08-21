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
          <h1 style={{ maxWidth: "22ch" }}>Efficacité Professionnelle & Soft Skills</h1>
          <p style={{ maxWidth: "62ch", fontSize: "1.05rem" }}>
            Trois modules pour renforcer la posture professionnelle, la communication et la
            qualité des relations en équipe.
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
            <figure className="placeholder-visual" aria-hidden="true">
              [ Photo — salle de réunion collaborative / illustration des flux relationnels ]
            </figure>
          </section>

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
