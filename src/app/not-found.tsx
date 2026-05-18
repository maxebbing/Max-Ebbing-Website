import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <div className="notFoundInner">
        <p className="notFoundCode">404</p>

        <h1 className="notFoundTitle">Seite nicht gefunden</h1>

        <p className="notFoundText">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>

        <Link href="/" className="notFoundButton">
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}