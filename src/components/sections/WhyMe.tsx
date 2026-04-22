const points = [
  "Direkter Kontakt ohne Zwischenebenen",
  "Schnelle Umsetzung ohne unnötige Verzögerungen",
  "Fokus auf Ergebnisse statt nur Design",
  "Klare Kommunikation ohne Komplexität",
];

export default function Why() {
  return (
    <section className="section section-why" id="warum-ich">
      <div className="container why-layout">
        <div className="why-left">
          <p className="section-eyebrow">Warum mit mir</p>

          <h2>
            Keine Agentur. Kein unnötiger Prozess. Einfach eine Website, die
            funktioniert.
          </h2>

          <p className="section-copy">
            Als Einzelperson arbeite ich direkt, effizient und mit klarem Fokus
            auf das Ergebnis – ohne unnötige Komplexität oder lange Abstimmungen.
          </p>
        </div>

        <div className="why-right">
          {points.map((point) => (
            <div className="why-item" key={point}>
              <span className="why-dot" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}