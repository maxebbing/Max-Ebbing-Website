import Footer from "./Footer";
import styles from "./css/CTA.module.css";

export default function Cta() {
  return (
    <section
      className={`section snap-section ${styles.cta}`}
      id="cta"
    >
      <div className={`container ${styles.ctaTop}`}>
        <div className={styles.ctaBox}>
          <p className="section-eyebrow">Nächster Schritt</p>

          <h2>Lass uns dein Projekt besprechen.</h2>

          <p className={styles.ctaText}>
            Wenn du eine Website möchtest, die professionell wirkt und gezielt
            Anfragen generieren soll, lass uns unverbindlich darüber sprechen.
          </p>

          <div className={styles.ctaActions}>
            <a href="/kontakt" className="button-primary">
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}