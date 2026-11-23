# FSPPA-Formation — site vitrine public

Site conservant **React 18 / Vite**, simplifié en hébergement statique. **Aucun serveur API, aucune base de données, aucun compte ou espace privé**. Le formulaire utilise `mailto:` et ouvre le logiciel de messagerie du visiteur : le site **ne peut ni envoyer directement ni certifier qu'un e-mail a été envoyé**.

## Démarrage

```bash
cd frontend
npm ci
npm run dev
```

## Production / SEO

```bash
cd frontend
SITE_URL=https://VOTRE-DOMAINE.FR npm run build
```

Sous Windows PowerShell, renseigner `$env:SITE_URL = 'https://VOTRE-DOMAINE.FR'` avant la commande `npm run build` (ou adapter la variable côté hébergeur). Le dossier `frontend/dist/` contient le site statique. Le build prérend **7 pages HTML** avec les vrais textes des pages, balises title/description/canonical, Open Graph, JSON-LD d'organisation, robots.txt et sitemap.xml (5 URL indexables). Attention : les liens `/securite-routiere` doivent être servis en `index.html` ou avec la règle de réécriture adéquate ; privilégier la redirection cohérente slash final/non final pour éviter les doublons canoniques.

## Visuels

Trois **illustrations SVG originales** créées pour le site (route, vigilance, atelier) remplacent les espaces réservés. Elles ne représentent pas Joël Thiébaut, ni de vraies photos de son activité. Les fichiers de logos FSPPA d'origine sont conservés.

## Avant mise en ligne : obligatoirement à confirmer

1. URL et domaine définitifs (`SITE_URL`) et disponibilité réelle de l'adresse `Joel.thiebaut@fsppa-formation.fr`.
2. **SIRET** de l'éditeur : la valeur présente dans l'original comporte **9 chiffres**, insuffisante pour un SIRET français de 14 chiffres. Ne pas la publier comme SIRET.
3. Identité complète de l'entreprise (indiquer **EI** si applicable), téléphone de contact public, adresse, informations TVA si applicables, identification de l'hébergeur (nom, adresse et téléphone).
4. Confirmer le libellé commercial, la réalité des formations et des durées d'expérience annoncées, la disponibilité du catalogue et les éventuelles obligations liées à la formation professionnelle.
5. Compléter la politique de rétention effective des courriels et les éventuels sous-traitants de messagerie. Faire relire les textes légaux.
6. Tester la messagerie sur ordinateurs et mobiles. Si l'utilisateur n'a pas de logiciel de messagerie configuré, fournir l'adresse cliquable comme alternative (prévue dans la page).
7. Contrôler le déploiement : HTTPS, redirects 301, 404, responsive, Lighthouse, Search Console et indexation réelle après mise en ligne.

## Limites

Pas de faux avis clients, faux chiffres, fausse localisation, fausse certification ou photo présentée comme une situation de formation réelle. Le référencement local avancé exige une vraie zone d'intervention validée. Aucune garantie de positionnement SEO n'est possible.

## Déploiement IONOS — préparation (non déployé)

**Cible :** offre **IONOS Hébergement Web Linux / Apache** avec certificat SSL actif et accès au gestionnaire de fichiers ou FTP/SFTP. Le site est 100 % statique : aucun backend, base de données, compte utilisateur ou processus Node à laisser tourner sur le serveur.

1. Valider dans IONOS le domaine public et le répertoire racine réellement associé au domaine.
2. Sur la machine de build, installer Node.js compatible avec Vite 5, puis lancer :
   - PowerShell : `cd frontend; npm ci; $env:SITE_URL="https://fsppa-formation.fr"; npm run build`
   - Linux/macOS : `cd frontend && npm ci && SITE_URL=https://fsppa-formation.fr npm run build`
   Adapter l'URL à **l'adresse définitive** et conserver exactement le même hôte canonique.
3. Vérifier que `frontend/dist/index.html`, `dist/securite-routiere/index.html`, `dist/soft-skills/index.html`, `dist/sitemap.xml`, `dist/robots.txt` et **`dist/.htaccess`** existent.
4. Envoyer **le contenu de `frontend/dist/`**, pas le dossier `frontend` ni le code source, dans la racine web IONOS. Conserver `.htaccess` (fichier caché), indispensable pour HTTPS et les redirections vers les pages pré-rendues.
5. Activer SSL dans IONOS **avant** de tester la redirection HTTPS. Une offre **Deploy Now** ou Windows/IIS ne suit pas nécessairement la même procédure : cette configuration cible Apache sur Linux.
6. Contrôler `https://domaine/`, `/securite-routiere/`, `/soft-skills/`, `/a-propos/`, `/contact/`, les pages légales, les erreurs 404, les redirections de slash, le menu mobile et l'ouverture du client e-mail.
7. Vérifier les balises HTML servies **sans JavaScript**, les URL canoniques, robots.txt, sitemap.xml, les résultats Lighthouse et Google Search Console, puis demander l'indexation des pages importantes.

**SEO/GEO :** les pages pré-rendues comportent titres, descriptions, URL canoniques, Open Graph et données structurées `Organization`, `WebSite`, `WebPage`. Le site présente des contenus utiles et une FAQ éditoriale accessibles aux moteurs de recherche et aux outils de réponse IA. Ces mesures ne garantissent ni classement ni citation dans les moteurs génératifs. Éviter d'inventer localisation, accréditation, chiffres, notes, témoignages ou catalogues.

**Données personnelles :** IONOS est l'hébergeur **prévu**. Confirmer dans le contrat la bonne entité légale et les coordonnées (ainsi que les journaux d'accès, leurs durées de conservation et les sous-traitants). La messagerie du destinataire n'est pas nécessairement hébergée chez IONOS.

**Avant publication :** SIRET valide de 14 chiffres, identité de l'éditeur, téléphone public et coordonnées de l'hébergeur, adresse contractuelle et durée de conservation des e-mails à confirmer ; vérification juridique recommandée. Le domaine, l'abonnement IONOS et les identifiants de connexion ne sont pas configurés par ces commits.
