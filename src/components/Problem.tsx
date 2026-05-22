import styles from "./css/Problem.module.css";

const problems = [
  {
    title: "Erster Eindruck überzeugt nicht",
    text: "---",
  },
  {
    title: "Besucher finden sich nicht zurecht",
    text: "---",
  },
  {
    title: "Technisch nicht ausgereift",
    text: "---",
  },
  {
    title: "Webauftritt fühlt sich unfertig an",
    text: "---",
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
              Viele Websites erfüllen ihre Aufgabe nicht.
            </h2>
          </div>
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