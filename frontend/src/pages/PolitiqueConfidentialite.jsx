function PolitiqueConfidentialite() {
  return (
    <section className="section">
      <section className="container section-narrow">
        <span className="eyebrow">RGPD</span>
        <h1>Politique de confidentialité</h1>
        <p style={{ color: "var(--slate)" }}>Dernière mise à jour : <em>à compléter</em></p>

        <h3>1. Responsable du traitement</h3>
        <p>
          Le responsable du traitement des données collectées via ce site est Joël Thiébaut
          (FSPPA-Formation), joignable à l'adresse{" "}
          <a href="mailto:Joel.thiebaut@fsppa-formation.fr">Joel.thiebaut@fsppa-formation.fr</a>.
        </p>

        <h3>2. Données collectées</h3>
        <p>
          Le formulaire de contact et de demande de devis collecte les données suivantes : nom,
          nom de l'entreprise (facultatif), téléphone (facultatif), adresse e-mail, type de
          formation souhaitée et message. Ces données sont fournies volontairement par
          l'utilisateur.
        </p>

        <h3>3. Finalité du traitement</h3>
        <p>
          Ces données sont utilisées exclusivement pour traiter la demande de devis ou
          d'intervention, répondre à la demande de contact, et assurer un suivi commercial.
        </p>

        <h3>4. Base légale</h3>
        <p>
          Le traitement repose sur le consentement explicite de l'utilisateur, recueilli via la
          case à cocher du formulaire, ainsi que sur l'intérêt légitime de répondre à une demande
          commerciale.
        </p>

        <h3>5. Destinataires des données</h3>
        <p>
          Les données sont exclusivement destinées à Joël Thiébaut / FSPPA-Formation. Elles ne
          sont ni vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
        </p>

        <h3>6. Durée de conservation</h3>
        <p>
          Les données sont conservées le temps nécessaire au traitement de la demande, puis
          archivées pour une durée maximale de 3 ans à compter du dernier contact, conformément
          aux recommandations de la CNIL.
        </p>

        <h3>7. Hébergement des données</h3>
        <p>
          Les données du formulaire sont stockées sur une base de données MongoDB hébergée par :{" "}
          <em>à compléter — nom de l'hébergeur / fournisseur cloud</em>.
        </p>

        <h3>8. Droits de l'utilisateur</h3>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de
          portabilité de vos données. Pour exercer ces droits, contactez :{" "}
          <a href="mailto:Joel.thiebaut@fsppa-formation.fr">Joel.thiebaut@fsppa-formation.fr</a>.
        </p>
        <p>
          Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
          (Commission Nationale de l'Informatique et des Libertés) —{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>.
        </p>

        <h3>9. Cookies</h3>
        <p>
          Ce site n'utilise pas de cookies de traçage publicitaire.
        </p>
      </section>
    </section>
  );
}

export default PolitiqueConfidentialite;
