import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { seo } from "../seo.js";
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const current = seo[pathname] || seo["/"];
    document.title = current.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", current.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = window.location.origin + (pathname === "/" ? "/" : pathname);
  }, [pathname]);
  return null;
}
