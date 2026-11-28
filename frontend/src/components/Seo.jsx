import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seo } from "../seo.js";

/**
 * Conserve les métadonnées pré-rendues au premier chargement et les actualise
 * lors d'une navigation côté client (sans créer de balises concurrentes).
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
    const current = seo[route];
    if (!current) return;
    // Conserver l'origine canonique de production même sur le domaine de
    // prévisualisation pages.dev. L'origine provient du HTML pré-rendu.
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    const canonicalOrigin = new URL(canonicalEl?.href || "https://fsppaformation.fr/").origin;
    const canonicalUrl = canonicalOrigin + (route === "/" ? "/" : route + "/");
    document.title = current.title;

    const setMeta = (selector, content) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', current.description);
    setMeta('meta[property="og:title"]', current.title);
    setMeta('meta[property="og:description"]', current.description);
    setMeta('meta[property="og:url"]', canonicalUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}
