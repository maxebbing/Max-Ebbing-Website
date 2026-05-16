import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <p>© 2026 Max Ebbing. Berlin.</p>

        <div className={styles.socialLinks}>

          <a
            href="https://www.linkedin.com/in/max-ebbing-484989401/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://github.com/maxebbing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

        </div>

        <div className={styles.footerLinks}>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}