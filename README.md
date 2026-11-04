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
