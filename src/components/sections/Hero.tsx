export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">Websites für lokale Unternehmen</p>

          <h1>Mehr Anfragen durch bessere Websites.</h1>

          <p className="hero-text">
            Ich entwickle schnelle, klare Websites für lokale Unternehmen, die
            gezielt darauf ausgelegt sind, Besucher in Kundenanfragen zu
            verwandeln – ohne lange Wartezeiten.
          </p>

          <div className="hero-actions">
            <a href="/kontakt" className="button-primary">
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-placeholder">
            <span>Platzhalter</span>
          </div>
        </div>
      </div>
    </section>
  );
}