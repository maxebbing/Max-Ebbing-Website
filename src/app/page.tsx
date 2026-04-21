import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="placeholder-section">
          <div className="container">
            <h1>Mehr Anfragen durch bessere Websites.</h1>
            <p>
              Hier bauen wir im nächsten Schritt deine Hero Section sauber ein.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}