import { useState } from "react";
import { Link } from "react-router-dom";
import { submitContact } from "../api/contact.js";

const formationTypes = [
  "Sécurité routière",
  "Sensibilisation seniors",
  "Addictions et conduite",
  "Gestion du stress",
  "Prise de parole en public",
  "Analyse transactionnelle",
  "Autre / à préciser",
];

const initialState = {
  nom: "",
  entreprise: "",
  telephone: "",
  email: "",
  typeFormation: formationTypes[0],
  message: "",
  consentementRGPD: false,
};

function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const res = await submitContact(form);
      setStatus({ state: "success", message: res.message });
      setForm(initialState);
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  return (
    <>
      <section className="section" style={{ paddingBottom: 20 }}>
        <section className="container">
          <span className="eyebrow">Devis & Intervention</span>
          <h1 style={{ maxWidth: "18ch" }}>Contact & Devis</h1>
          <p style={{ maxWidth: "60ch", fontSize: "1.05rem" }}>
            Décrivez votre besoin, nous vous répondons sous 48h avec une proposition adaptée à
            votre entreprise, votre collectivité ou votre projet personnel.
          </p>
        </section>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <section className="container">
          <section className="contact-layout">
            <form onSubmit={handleSubmit} noValidate>
              {status.state === "success" && (
                <p className="form-status success" role="status">{status.message}</p>
              )}
              {status.state === "error" && (
                <p className="form-status error" role="alert">{status.message}</p>
              )}

              <fieldset className="form-grid">
                <legend className="sr-only">Vos coordonnées et votre demande</legend>

                <p className="field">
                  <label htmlFor="nom">Nom *</label>
                  <input
                    id="nom" name="nom" type="text" required
                    value={form.nom} onChange={handleChange}
                    placeholder="Votre nom et prénom"
                  />
                </p>
                <p className="field">
                  <label htmlFor="entreprise">Entreprise</label>
                  <input
                    id="entreprise" name="entreprise" type="text"
                    value={form.entreprise} onChange={handleChange}
                    placeholder="Nom de votre structure"
                  />
                </p>
                <p className="field">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    id="telephone" name="telephone" type="tel"
                    value={form.telephone} onChange={handleChange}
                    placeholder="06 00 00 00 00"
                  />
                </p>
                <p className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="vous@exemple.fr"
                  />
                </p>
                <p className="field full">
                  <label htmlFor="typeFormation">Type de formation souhaitée *</label>
                  <select
                    id="typeFormation" name="typeFormation" required
                    value={form.typeFormation} onChange={handleChange}
                  >
                    {formationTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </p>
                <p className="field full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" required
                    value={form.message} onChange={handleChange}
                    placeholder="Décrivez votre contexte, vos objectifs, le nombre de participants..."
                  />
                </p>
                <p className="field full">
                  <label className="checkbox-field" htmlFor="consentementRGPD">
                    <input
                      id="consentementRGPD" name="consentementRGPD" type="checkbox"
                      required checked={form.consentementRGPD} onChange={handleChange}
                    />
                    <span>
                      J'accepte que les informations saisies dans ce formulaire soient utilisées
                      pour traiter ma demande, conformément à la <Link to="/politique-confidentialite">politique de confidentialité (RGPD)</Link>.
                      Aucune donnée n'est transmise à des tiers.
                    </span>
                  </label>
                </p>
              </fieldset>

              <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 22 }} disabled={status.state === "loading"}>
                {status.state === "loading" ? "Envoi en cours..." : "Envoyer ma demande de devis"}
              </button>
              <p className="form-note">* Champs obligatoires. Réponse sous 48h ouvrées.</p>
            </form>

            <aside className="contact-info-card">
              <span className="eyebrow">Coordonnées</span>
              <h3>Joël Thiébaut</h3>
              <ul>
                <li className="contact-info-row">📍 Interventions France entière</li>
                <li className="contact-info-row">✉️ contact@fsppa-formation.fr</li>
                <li className="contact-info-row">🕘 Réponse sous 48h ouvrées</li>
                <li className="contact-info-row">🏢 FSPPA-Formation — Micro-entreprise</li>
              </ul>
            </aside>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
