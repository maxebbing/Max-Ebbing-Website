export default function KontaktPage() {
  return (
    <main className="section">
      <div className="container contact-layout">
        <div className="contact-left">
          <p className="section-eyebrow">Kontakt</p>
          <h1>Projekt anfragen</h1>

          <p className="section-copy">
            Schreib mir kurz, worum es bei deinem Projekt geht. Ich melde mich
            schnellstmöglich zurück und wir klären die nächsten Schritte.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-Mail" required />
          <textarea
            placeholder="Worum geht es bei deinem Projekt?"
            rows={5}
            required
          />
          <button className="button-primary" type="submit">
            Anfrage senden
          </button>
        </form>
      </div>
    </main>
  );
}