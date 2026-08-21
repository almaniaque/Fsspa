import { useState } from "react";

/**
 * Système d'accordéon pour détailler les sous-modules sans surcharger l'écran
 * (Onglet 2 — Sécurité & Risques Routiers du cahier des charges).
 */
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <li key={item.title} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </span>
              <span className="accordion-chevron" />
            </button>
            <section className="accordion-panel">
              <section className="accordion-panel-inner">{item.content}</section>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
