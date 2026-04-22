export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <div className="logo">Max Ebbing</div>

        <nav className="nav">
          <a href="#services">Leistungen</a>
          <a href="#prozess">Prozess</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}