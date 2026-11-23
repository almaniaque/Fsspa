import { useId, useState } from "react";

/** Accordéon accessible : panneaux fermés retirés de la navigation clavier. */
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId().replace(/:/g, "");

  return (
    <ul className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;
        return (
          <li key={item.title} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              id={triggerId}
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span className="num">{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </span>
              <span className="accordion-chevron" aria-hidden="true" />
            </button>
            <section
              id={panelId}
              className="accordion-panel"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              <div className="accordion-panel-inner">{item.content}</div>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
