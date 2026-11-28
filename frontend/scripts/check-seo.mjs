import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { seo } from "../src/seo.js";

const origin = (process.env.SITE_URL || "https://fsppaformation.fr").replace(/\/$/, "");
const canonicalPath = route => route === "/" ? "/" : route + "/";
let failures = 0;
async function read(path) {
  try { return await readFile(join("dist", path), "utf8"); }
  catch (err) { failures++; console.error("ABSENT", path, err.message); return ""; }
}
function assert(condition, label) {
  if (!condition) { failures++; console.error("ECHEC", label); }
  else console.log("OK", label);
}
const sitemap = await read("sitemap.xml");
const robots = await read("robots.txt");
const notFound = await read("404.html");
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`), "robots.txt pointe vers le bon domaine");
assert(notFound.includes("noindex"), "404.html non indexable");
assert(!sitemap.includes("fsppa-formation.fr"), "pas de domaine incorrect dans le sitemap");
for (const [route, meta] of Object.entries(seo)) {
  const p = route === "/" ? "index.html" : route.slice(1) + "/index.html";
  const html = await read(p);
  const url = origin + canonicalPath(route);
  assert(html.includes(`<title>${meta.title}</title>`), `titre ${route}`);
  assert(html.includes(`href="${url}"`), `canonical ${route}`);
  assert(html.includes('type="application/ld+json"'), `Schema.org ${route}`);
  assert(html.includes('<h1'), `titre H1 ${route}`);
  const indexable = !["/mentions-legales", "/politique-confidentialite"].includes(route);
  assert(html.includes(`name="robots" content="${indexable ? "index,follow,max-image-preview:large" : "noindex,follow"}`), `directive robots ${route}`);
  assert(sitemap.includes(`<loc>${url}</loc>`) === indexable, `sitemap ${route}`);
}
if (failures) {
  console.error(`Audit SEO : ${failures} erreur(s).`);
  process.exitCode = 1;
} else {
  console.log("Audit SEO statique réussi.");
}
