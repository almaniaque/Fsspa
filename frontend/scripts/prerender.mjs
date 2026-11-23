import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { seo } from "../src/seo.js";

const origin = (process.env.SITE_URL || "https://fsppaformation.fr").replace(/\/$/, "");
const canonicalPath = route => route === "/" ? "/" : `${route}/`;
const escape = v => String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const template = await readFile("dist/index.html", "utf8");
  const routes = Object.entries(seo);
  for (const [route, meta] of routes) {
    const html = renderToString(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)));
    const canonical = origin + canonicalPath(route);
    const robots = route === "/mentions-legales" || route === "/politique-confidentialite" ? "noindex,follow" : "index,follow,max-image-preview:large";
    const head = `<title>${escape(meta.title)}</title><meta name="description" content="${escape(meta.description)}"/><meta name="robots" content="${robots}"/><link rel="canonical" href="${escape(canonical)}"/><meta property="og:type" content="website"/><meta property="og:locale" content="fr_FR"/><meta property="og:site_name" content="FSPPA-Formation"/><meta property="og:title" content="${escape(meta.title)}"/><meta property="og:description" content="${escape(meta.description)}"/><meta property="og:url" content="${escape(canonical)}"/><meta property="og:image" content="${origin}/media/route-prevention.svg"/><meta name="twitter:card" content="summary_large_image"/>`;
    const entity = {"@context":"https://schema.org","@graph":[
      {"@type":"Organization","@id":origin+"/#organisation",name:"FSPPA-Formation",url:origin+"/",email:"Joel.thiebaut@fsppa-formation.fr",description:seo["/"].description,logo:origin+"/media/fsppa_logo.webp"},
      {"@type":"WebSite","@id":origin+"/#website",name:"FSPPA-Formation",url:origin+"/",inLanguage:"fr-FR",publisher:{"@id":origin+"/#organisation"}},
      {"@type":"WebPage","@id":canonical+"#webpage",url:canonical,name:meta.title,description:meta.description,inLanguage:"fr-FR",isPartOf:{"@id":origin+"/#website"},about:{"@id":origin+"/#organisation"}}
    ]};
    const services = {
      "/securite-routiere": ["Prévention du risque routier", "Sensibilisation des conducteurs seniors", "Addictions et conduite"],
      "/soft-skills": ["Gestion du stress", "Prise de parole en public", "Analyse transactionnelle"]
    };
    if (services[route]) {
      entity["@graph"].push({
        "@type": "Service",
        name: meta.title,
        description: meta.description,
        provider: {"@id":origin+"/#organisation"},
        serviceType: services[route],
        url: canonical
      });
    }
    const jsonld = `<script type="application/ld+json">${JSON.stringify(entity).replace(/</g,"\\u003c")}</script>`;
    let page = template.replace(/<title>[^<]*<\/title>/,'').replace(/<meta\s+name="description"[\s\S]*?\/>/,'').replace(/<meta\s+name="robots"[^>]*\/>/,'');
    page = page.replace("</head>", `${head}${jsonld}</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const output = route === "/" ? "dist/index.html" : `dist${route}/index.html`;
    await mkdir(path.dirname(output),{recursive:true}); await writeFile(output,page);
  }
  const targets=routes.filter(([route])=>!route.includes("legales")&&!route.includes("confidentialite"));
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${targets.map(([route])=>`<url><loc>${origin}${canonicalPath(route)}</loc></url>`).join("")}</urlset>`);
  await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  // Une vraie page 404 empêche le fallback SPA de renvoyer un code 200
  // pour une URL inconnue, ce qui évite les soft-404.
  const notFound = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page introuvable | FSPPA-Formation</title><style>body{margin:0;background:#f4f7fb;color:#1a365d;font-family:system-ui,sans-serif;min-height:100vh;display:grid;place-items:center}main{max-width:36rem;padding:2rem}a{color:#235a99;font-weight:700}</style></head><body><main><h1>Page introuvable</h1><p>Cette adresse n'existe pas ou n'est plus disponible.</p><p><a href="/">Retour à l'accueil de FSPPA-Formation</a></p></main></body></html>`;
  await writeFile("dist/404.html", notFound);
  console.log(`Prerendered ${routes.length} routes; sitemap + robots created for ${origin}`);
} finally { await vite.close(); }
