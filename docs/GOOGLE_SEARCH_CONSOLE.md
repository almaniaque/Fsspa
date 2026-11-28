# Mise en service de Google Search Console — FSPPA-Formation

Domaine canonique : **https://fsppaformation.fr/** (sans tiret). La messagerie professionnelle utilise un autre domaine, à ne pas modifier lors des opérations DNS.

## 1. Ajouter et valider une propriété Domaine

1. Se connecter à https://search.google.com/search-console/ avec le compte Google qui doit gérer les statistiques du site.
2. Cliquer sur **Ajouter une propriété** → **Domaine**.
3. Saisir uniquement `fsppaformation.fr` (sans `https://`, `www` ni chemin).
4. Copier la valeur exacte communiquée par Google : `google-site-verification=...`. Ne pas utiliser une valeur d'exemple.
5. Dans **Cloudflare → fsppaformation.fr → DNS → Records → Add record**, créer :
   - Type : **TXT**
   - Nom : **@**
   - Contenu : **la valeur exacte de Google**
   - TTL : Auto
6. Enregistrer, puis cliquer sur **Valider** dans Search Console. Si l'enregistrement n'est pas immédiatement visible, réessayer après propagation.
7. Conserver durablement le TXT de vérification : sa suppression peut faire perdre la validation de propriété.

Il est inutile de modifier les MX, SPF, DKIM, DMARC ou les serveurs DNS pour ajouter cette preuve de propriété. La propriété **Domaine** couvre les variantes du domaine.

## 2. Déclarer le sitemap

Ouvrir **Search Console → Indexation → Sitemaps → Ajouter un sitemap** et soumettre :

```
https://fsppaformation.fr/sitemap.xml
```

Le sitemap est généré par le build Vite. Il doit contenir les URL canoniques indexables :
- https://fsppaformation.fr/
- https://fsppaformation.fr/securite-routiere/
- https://fsppaformation.fr/soft-skills/
- https://fsppaformation.fr/a-propos/
- https://fsppaformation.fr/contact/

Les mentions légales et la politique de confidentialité ont pour le moment une balise `noindex` et n'apparaissent pas dans le sitemap. Ne soumettre que des pages publiques, canoniques et destinées à l'indexation.

## 3. Demander l'indexation et surveiller

- Utiliser **Inspection de l'URL** pour la page d'accueil puis les pages de formation, vérifier que leur URL canonique correspond au sitemap et demander l'indexation si nécessaire.
- Consulter **Indexation → Pages** pour identifier erreurs de récupération, exclusions et éventuelles pages alternatives.
- Consulter **Performances → Résultats de recherche** pour suivre les impressions, requêtes, clics et pages réellement affichées par Google.
- Vérifier **Signaux Web essentiels** et les rapports de sécurité régulièrement.
- Ne pas multiplier les demandes d'indexation pour les mêmes URL. Une demande n'assure ni apparition immédiate ni positionnement.

## 4. Contrôles techniques avant et après validation

Le build lance désormais `npm run check:seo` après le pré-rendu. Il vérifie les sept pages, leurs titres, directives robots, URL canoniques, données Schema.org et la cohérence du sitemap, de `robots.txt` et de `404.html`.

Sur le site public, vérifier les codes HTTP, le HTML et les redirections finales à l'aide des outils de navigation et de Search Console. Les outils externes n'arrivent pas toujours à consulter directement le domaine ; les résultats de Search Console et les journaux Cloudflare sont alors à privilégier.

Éviter le contenu artificiel, les promesses de classement, les `FAQPage` structurées non éligibles ou les informations géographiques non validées. La clarté des contenus et les données structurées exactes constituent une base pour le SEO et le GEO, sans garantie de citation par les IA.

Sources :
- https://developers.google.com/search/docs/monitor-debug/search-console-start/
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
