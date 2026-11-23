# FSPPA-Formation — site vitrine (React 18 / Vite)

Site public de formation et sensibilisation : **aucun compte**, aucun serveur API, aucune base de données. La demande de contact utilise `mailto:` : le visiteur doit lui-même confirmer l'envoi dans son logiciel de messagerie. La direction artistique d'origine est conservée (bleu marine, cyan, orange, blason routier). Le nom de marque est désormais du **texte HTML accessible** et non une image.

## Développement local

Prérequis : Node.js 22 et npm.

```bash
cd frontend
npm ci
npm run dev
```

Le projet se construit avec `npm run build` : Vite génère les assets, puis `scripts/prerender.mjs` génère les pages HTML publiques, le sitemap, robots.txt et `404.html`. Le répertoire final est **`frontend/dist`**.

## Déploiement : Cloudflare Pages + domaine IONOS

**Nom de domaine réel : `fsppaformation.fr` (sans tiret).** IONOS reste le registrar ; le site est prévu pour **Cloudflare Pages**. Ne pas confondre l'adresse e-mail professionnelle, qui utilise encore `@fsppa-formation.fr`, avec le domaine web : vérifier séparément son bon fonctionnement.

Dans Cloudflare : **Workers & Pages → Create application → Pages → Connect to Git**. Sélectionner `almaniaque/Fsspa` et renseigner :

| Paramètre | Valeur |
| --- | --- |
| Projet | `fsppa-formation` |
| Branche de production | `refonte` |
| Répertoire racine | `frontend` |
| Commande de build | `npm run build` |
| Répertoire de sortie | `dist` |
| Node.js | `22` (`frontend/.node-version`, ou variable `NODE_VERSION=22`) |
| Variable d'environnement `SITE_URL` | `https://fsppaformation.fr` |

**Important :** ne pas ajouter de serveur Node/Express à Cloudflare. Le site est statique ; le formulaire n'envoie pas directement d'e-mail. Cloudflare Pages sert automatiquement les fichiers `/chemin/index.html`. Le fichier `frontend/public/_headers` configure des en-têtes de sécurité. Il n'y a pas de `.htaccess` Apache.

### Domaine personnalisé, DNS et HTTPS

1. Déployer d'abord et vérifier le domaine temporaire `*.pages.dev`.
2. Ajouter le domaine **`fsppaformation.fr`** dans **Pages → Custom domains**. Pour un **domaine apex**, Cloudflare requiert que la zone DNS soit active sur ses serveurs de noms ; suivre les instructions exactes affichées dans le tableau de bord.
3. Dans IONOS, modifier les **nameservers** seulement après avoir copié/vérifié tous les enregistrements DNS existants, surtout **MX, SPF, DKIM, DMARC**, afin de ne pas couper la messagerie.
4. Attendre la validation DNS et TLS/HTTPS chez Cloudflare avant d'annoncer le site. Configurer ensuite **www → domaine sans www** si `www` est utilisé, et réduire les doublons du domaine `pages.dev` avec une redirection adaptée.
5. Ne pas introduire de règle Cloudflare `/* /index.html 200` : elle risquerait de masquer les pages pré-rendues et les vraies 404.

Documentation officielle : https://developers.cloudflare.com/pages/get-started/git-integration/ et https://developers.cloudflare.com/pages/configuration/custom-domains/

### Contrôles après déploiement

- `/`, `/securite-routiere/`, `/soft-skills/`, `/a-propos/`, `/contact/` et les deux pages légales doivent servir leur **HTML pré-rendu** sans dépendre de JavaScript.
- Une URL inexistante doit renvoyer une **404**, pas le contenu de l'accueil en 200.
- Vérifier `/robots.txt`, `/sitemap.xml`, les balises title, description, canonical, Open Graph et JSON-LD, leur domaine et les redirections finales.
- Vérifier l'ergonomie mobile, la lisibilité de l'en-tête, le menu et le formulaire `mailto:`, puis réaliser Lighthouse et Google Search Console.
- SEO/GEO : contenus utiles et vérifiables, FAQ éditoriale, données structurées basées sur les services réels ; aucune promesse d'indexation, de classement ni de citation automatique par une IA.

## Avant publication : points bloquants

- **SIRET de 14 chiffres**, identification de l'éditeur, adresse et éléments légaux : vérifier les mentions légales.
- Confirmer l'entité hébergeuse Cloudflare et les coordonnées contractuelles ; IONOS n'est ici que le fournisseur de domaine.
- Vérifier le contrat Cloudflare, le traitement des journaux d'accès, la politique de confidentialité, la conservation des e-mails et les éventuels transferts de données.
- Confirmer le domaine définitif, la messagerie `Joel.thiebaut@fsppa-formation.fr` et les affirmations sur les prestations et l'expérience.
- Ce dépôt **ne configure pas lui-même** le compte Cloudflare, les DNS IONOS ni les secrets ; le déploiement nécessite d'autoriser la connexion GitHub dans Cloudflare.

## Éthique du contenu

Ne pas inventer de certifications, faux avis, chiffres, zones d'intervention, photos de véritables formations ou coordonnées. Aucune promesse de référencement SEO/GEO n'est possible.
