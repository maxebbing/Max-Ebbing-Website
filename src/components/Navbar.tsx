"use client";

import styles from "./css/Navbar.module.css";

function scrollToSection(id: string) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export default function Navbar() {
  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.navbar}`}>
        <button
          className={styles.logo}
          type="button"
          onClick={() => scrollToSection("hero")}
        >
          Max Ebbing
        </button>

        <nav className={styles.nav}>
          <button type="button" onClick={() => scrollToSection("services")}>
            Leistungen
          </button>

          <button type="button" onClick={() => scrollToSection("prozess")}>
            Prozess
          </button>

          <a href="/kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}