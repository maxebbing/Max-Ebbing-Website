const services = [
  {
    title: "Webdesign",
    text: "Moderne, klare Websites, die professionell wirken und Vertrauen aufbauen.",
  },
  {
    title: "SEO-Grundoptimierung",
    text: "Saubere technische Basis, damit deine Website überhaupt sichtbar wird.",
  },
  {
    title: "Conversion-Optimierung",
    text: "Struktur und Inhalte, die Besucher gezielt zu Anfragen führen.",
  },
  {
    title: "Integration",
    text: "Formulare, Tracking und Tools werden sauber in deine Website eingebunden.",
  },
];

export default function Services() {
  return (
    <section className="section section-services" id="services">
      <div className="container services-layout">
        <div className="services-left">
          <p className="section-eyebrow">Leistungen</p>
          <h2>Alles, was eine starke Website wirklich braucht.</h2>
          <p className="section-copy">
            Ich entwickle Websites nicht nur für ein gutes Erscheinungsbild,
            sondern mit klarem Fokus auf Sichtbarkeit, Vertrauen und Anfragen.
          </p>
        </div>

        <div className="services-right">
          {services.map((service) => (
            <div className="service-row" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}