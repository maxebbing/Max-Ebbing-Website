import styles from "./css/Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} snap-section`} id="hero">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Websites für lokale Unternehmen</p>

          <h1>Mehr Anfragen durch bessere Websites.</h1>

          <p className={styles.heroText}>
            Ich entwickle schnelle, klare Websites für lokale Unternehmen, die
            gezielt darauf ausgelegt sind, Besucher in Kundenanfragen zu
            verwandeln – ohne lange Wartezeiten.
          </p>

          <div className={styles.heroActions}>
            <a href="/kontakt" className="button-primary">
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroPlaceholder}>
            <span>Platzhalter</span>
          </div>
        </div>
      </div>
    </section>
  );
}