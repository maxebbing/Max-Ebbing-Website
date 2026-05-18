import styles from "./css/Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} snap-section`} id="hero">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Websites für Unternehmen</p>

          <h1>Viele Websites wirken professionell, bis man sie benutzt.</h1>

          <p className={styles.heroText}>
            Ich entwickle Websites für Unternehmen, die mehr leisten als gut auszusehen. 
            <br /> 
            Durchdacht. Hochwertig. Ausgereift.
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