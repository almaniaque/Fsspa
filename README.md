# FSPPA-Formation — Site Vitrine (Stack MERN)

Première ébauche du site vitrine pour **FSPPA-Formation** (Joël Thiébaut), basée sur le cahier des charges fourni.

Stack : **MongoDB + Express + React (Vite) + Node.js**

## Structure du projet

```
fsppa-formation/
├── backend/          → API Node/Express + MongoDB (formulaire de contact/devis)
└── frontend/          → Application React (Vite) — 5 onglets du cahier des charges
```

## Démarrage rapide

### 1. Backend

```bash
cd backend
cp .env.example .env     # renseigner MONGO_URI, EMAIL_USER, EMAIL_PASS, ADMIN_EMAIL
npm install
npm run dev               # démarre sur http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env      # VITE_API_URL=http://localhost:5000/api
npm install
npm run dev                # démarre sur http://localhost:5173
```

## Ce que contient cette ébauche

- **5 pages** correspondant aux 5 onglets du cahier des charges : Accueil, Sécurité & Risques Routiers, Efficacité Professionnelle & Soft Skills, À Propos, Contact & Devis.
- **Charte graphique** appliquée à partir de la palette fournie (Bleu Marine #1a365d, Bleu Cyan #3182ce, Orange Ambre #dd6b20, Gris Ardoise #718096, Blanc #ffffff).
- **Formulaire de contact/devis** relié à une API Express qui enregistre la demande en base MongoDB et (optionnellement) envoie un email à l'adresse professionnelle.
- **CTA récurrents** ("Demander une intervention", "Télécharger le catalogue") présents sur chaque page.
- **Accordéons** pour les 3 sous-modules Sécurité Routière.
- Site **100% responsive** (mobile / tablette / desktop).

## Prochaines étapes suggérées

1. Remplacer les visuels placeholder par les vraies photos de Joël Thiébaut en situation de formation.
2. Ajouter la section "Actualités / Réglementation" (SEO) comme collection MongoDB dédiée (`Article`) — structure prête à être dupliquée depuis `Contact`.
3. Brancher un vrai fournisseur d'envoi d'e-mails (SendGrid, Resend, etc.) en remplacement de Nodemailer/SMTP basique.
4. Ajouter la mention légale RGPD complète et la politique de confidentialité.
5. Déploiement : backend sur Render/Railway, frontend sur Vercel/Netlify, base sur MongoDB Atlas.
