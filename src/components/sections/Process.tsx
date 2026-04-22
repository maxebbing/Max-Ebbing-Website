const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    text: "Wir klären, was du brauchst, welche Ziele deine Website hat und wie sie konkret Anfragen generieren soll.",
  },
  {
    number: "02",
    title: "Konzept & Struktur",
    text: "Ich plane Aufbau, Inhalte und Nutzerführung, damit deine Website logisch und klar funktioniert.",
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Die Website wird schnell und sauber entwickelt – ohne unnötige Verzögerungen oder Komplexität.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Deine Website geht online und ist bereit, Besucher in konkrete Anfragen zu verwandeln.",
  },
];

export default function Process() {
  return (
    <section className="section section-process" id="prozess">
      <div className="container">
        <div className="section-heading-simple">
          <p className="section-eyebrow">Prozess</p>
          <h2>So entsteht deine Website</h2>
          <p className="section-copy">
            Ein strukturierter Ablauf sorgt dafür, dass dein Projekt schnell,
            sauber und ohne unnötige Komplexität umgesetzt wird.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
