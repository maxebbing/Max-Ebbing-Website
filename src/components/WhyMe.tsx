import styles from "./css/WhyMe.module.css";

const points = [
  "Direkter Kontakt ohne Zwischenebenen",
  "Schnelle Umsetzung ohne unnötige Verzögerungen",
  "Fokus auf Ergebnisse statt nur Design",
  "Klare Kommunikation ohne Komplexität",
];

export default function Why() {
  return (
    <section className="section snap-section" id="warum-ich">
      <div className={`container ${styles.whyLayout}`}>
        <div className={styles.whyLeft}>
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

        <div className={styles.whyRight}>
          {points.map((point) => (
            <div className={styles.whyItem} key={point}>
              <span className={styles.whyDot} />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}