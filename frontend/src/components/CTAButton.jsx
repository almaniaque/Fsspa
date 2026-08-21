import { Link } from "react-router-dom";

/**
 * Bouton d'appel à l'action réutilisable.
 * Utilisé pour "Demander une intervention" / "Télécharger le catalogue"
 * présents sur chaque page comme demandé dans le cahier des charges.
 */
function CTAButton({ to, href, variant = "primary", children, ...rest }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className} download {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default CTAButton;
