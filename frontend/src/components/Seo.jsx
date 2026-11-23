import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seo } from "../seo.js";

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
    const current = seo[route] || seo["/"];
    document.title = current.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", current.description);
    // Les canonicals sont déjà pré-rendus en HTML : ne pas modifier
    // l'élément au chargement, conformément aux recommandations Google.
  }, [pathname]);
  return null;
}
