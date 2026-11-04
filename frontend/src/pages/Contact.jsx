import { useState } from "react";
import { Link } from "react-router-dom";

const adresse = "Joel.thiebaut@fsppa-formation.fr";
const formations = ["Sécurité routière", "Sensibilisation seniors", "Addictions et conduite", "Gestion du stress", "Prise de parole en public", "Analyse transactionnelle", "Autre demande"];
export default function Contact() {
  const [etat, setEtat] = useState("");
  const [form, setForm] = useState({ nom: "", entreprise: "", email: "", telephone: "", typeFormation: formations[0], message: "", consentement: false });
  const update = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
  function envoyer(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity() || !form.consentement) return;
    const corps = `Nom : ${form.nom}\nEntreprise : ${form.entreprise || "Non renseignée"}\nTéléphone : ${form.telephone || "Non renseigné"}\nEmail : ${form.email}\nFormation : ${form.typeFormation}\n\nDemande :\n${form.message}`;
    const lien = `mailto:${adresse}?subject=${encodeURIComponent("Demande de formation — " + form.typeFormation)}&body=${encodeURIComponent(corps)}`;
    setEtat("Votre messagerie va s’ouvrir avec le message prérempli. Vérifiez-le puis cliquez sur Envoyer dans votre messagerie : le site ne peut pas confirmer l'envoi.");
    window.location.href = lien;
  }
  return <>
    <section className="section" style={{paddingBottom:20}}><div className="container"><span className="eyebrow">Un projet de formation ?</span><h1>Contact & demande d'intervention</h1><p>Présentez votre besoin : sécurité routière, prévention ou développement des compétences professionnelles. Aucun compte à créer.</p></div></section>
    <section className="section" style={{paddingTop:20}}><div className="container contact-layout">
      <form onSubmit={envoyer}>
        <fieldset className="form-grid"><legend className="sr-only">Votre demande de contact</legend>
          <p className="field"><label htmlFor="nom">Nom et prénom *</label><input id="nom" name="nom" autoComplete="name" value={form.nom} onChange={update} required maxLength="120" /></p>
          <p className="field"><label htmlFor="entreprise">Entreprise ou collectivité</label><input id="entreprise" name="entreprise" autoComplete="organization" value={form.entreprise} onChange={update} maxLength="160" /></p>
          <p className="field"><label htmlFor="email">E-mail *</label><input id="email" name="email" autoComplete="email" type="email" value={form.email} onChange={update} required maxLength="200" /></p>
          <p className="field"><label htmlFor="telephone">Téléphone (facultatif)</label><input id="telephone" name="telephone" autoComplete="tel" type="tel" value={form.telephone} onChange={update} maxLength="35" /></p>
          <p className="field full"><label htmlFor="typeFormation">Formation souhaitée *</label><select id="typeFormation" name="typeFormation" value={form.typeFormation} onChange={update}>{formations.map(v=><option key={v}>{v}</option>)}</select></p>
          <p className="field full"><label htmlFor="message">Votre message *</label><textarea id="message" name="message" value={form.message} onChange={update} required minLength="10" maxLength="4000" placeholder="Contexte, nombre de participants, objectifs, dates envisagées…" /></p>
          <p className="field full"><label className="checkbox-field"><input type="checkbox" name="consentement" checked={form.consentement} onChange={update} required /><span>J'ai pris connaissance de la <Link to="/politique-confidentialite">politique de confidentialité</Link> et accepte de transmettre ces informations par e-mail afin de recevoir une réponse. *</span></label></p>
        </fieldset>
        <button className="btn btn-primary btn-block" type="submit">Préparer mon e-mail</button>
        <p className="form-note">* Obligatoire. Le bouton ouvre votre application de messagerie : aucun message n'est enregistré sur ce site.</p>
        {etat && <p className="form-status" role="status">{etat}</p>}
        <p>Vous préférez écrire directement ? <a href={`mailto:${adresse}`}>{adresse}</a></p>
      </form>
      <aside className="contact-info-card"><span className="eyebrow">Échangeons</span><h2>Une réponse adaptée à votre situation</h2><p>Entreprise, collectivité ou particulier : expliquez-nous vos objectifs et le cadre de l'intervention.</p><p><strong>Adresse e-mail :</strong> <a href={`mailto:${adresse}`}>{adresse}</a></p><p>Aucune connexion, aucun espace personnel, aucun stockage des demandes sur le site.</p></aside>
    </div></section>
  </>;
}
