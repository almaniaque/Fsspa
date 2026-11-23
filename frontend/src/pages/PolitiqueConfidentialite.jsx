function PolitiqueConfidentialite() {
  return (
    <section className="section">
      <section className="container section-narrow">
        <span className="eyebrow">RGPD</span>
        <h1>Politique de confidentialité</h1>
        <p style={{ color: "var(--slate)" }}>Dernière mise à jour : 23 novembre 2026</p>

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
          l'utilisateur et ne sont pas envoyées directement au serveur du site.
        </p>

        <h3>3. Finalité du traitement</h3>
        <p>
          Les données saisies servent uniquement à préparer un courriel dans votre logiciel de messagerie.
          Après votre envoi effectif, le destinataire les utilise pour traiter votre demande et vous répondre.
        </p>

        <h3>4. Base légale</h3>
        <p>
          Le traitement des demandes reçues repose sur les mesures précontractuelles prises à votre demande
          ou sur l'intérêt légitime de répondre à votre sollicitation, selon le contexte. La case du formulaire confirme
          que vous avez pris connaissance de ces informations.
        </p>

        <h3>5. Destinataires des données</h3>
        <p>
          Les données sont exclusivement destinées à Joël Thiébaut / FSPPA-Formation. Elles ne
          sont ni vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
        </p>

        <h3>6. Durée de conservation</h3>
        <p>
          Le site n'enregistre pas les formulaires dans une base de données. Les courriels effectivement envoyés
          sont conservés dans la messagerie professionnelle pour la durée nécessaire à la relation et au respect
          des obligations applicables ; la durée exacte doit être fixée par le responsable du traitement.
        </p>

        <h3>7. Hébergement technique et messagerie</h3>
        <p>
          Les champs du formulaire restent dans votre navigateur jusqu’à l’ouverture de
          votre messagerie. Le site ne dispose d’aucune base de données de contacts.
          La diffusion du site est prévue via <strong>Cloudflare Pages</strong>, tandis
          qu’<strong>IONOS</strong> assure l’enregistrement du nom de domaine.
        </p>
        <p>
          Cloudflare peut traiter des données techniques liées à la consultation du site,
          notamment l’adresse IP et des journaux de requêtes, dans le cadre de la sécurité
          et de la fourniture du service. Les conditions contractuelles, durées de
          conservation, localisation et sous-traitants applicables devront être vérifiés
          lors de la configuration effective. Les courriels réellement envoyés sont traités
          par les fournisseurs de messagerie de l’expéditeur et du destinataire ; le choix
          de Cloudflare Pages ne détermine pas l’hébergement de ces messageries.
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
          Ce site ne dépose aucun cookie publicitaire ou analytique dans la version livrée.
          L'ajout ultérieur de services de mesure d'audience ou de contenus tiers nécessitera une réévaluation de cette politique.
        </p>
      </section>
    </section>
  );
}

export default PolitiqueConfidentialite;
