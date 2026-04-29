import styles from "./css/Problem.module.css";

const problems = [
  {
    title: "Keine klare Nutzerführung",
    text: "Besucher wissen oft nicht sofort, was angeboten wird oder was sie als Nächstes tun sollen.",
  },
  {
    title: "Zu wenig Anfragen",
    text: "Viele Websites sehen ordentlich aus, sind aber nicht darauf ausgelegt, Besucher in Anfragen zu verwandeln.",
  },
  {
    title: "Langsam und veraltet",
    text: "Schwache Ladezeiten, alte Technik und unklare Strukturen kosten Vertrauen und Sichtbarkeit.",
  },
  {
    title: "Zu aufwendig in der Umsetzung",
    text: "Monatelange Projekte, unnötige Komplexität und schlechte Kommunikation bremsen kleine Unternehmen aus.",
  },
];

export default function Problem() {
  return (
    <section className="section snap-section" id="problem">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-eyebrow">Das Problem</p>
            <h2>
              Viele Unternehmenswebsites sehen okay aus, leisten aber zu wenig.
            </h2>
          </div>

          <p className="section-intro">
            Genau hier verlieren viele kleine Unternehmen Potenzial. Die Website
            ist online, aber sie unterstützt weder Sichtbarkeit noch Anfragen in
            einer wirklich wirksamen Form.
          </p>
        </div>

        <div className={styles.problemGrid}>
          {problems.map((problem) => (
            <article className={styles.problemCard} key={problem.title}>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}