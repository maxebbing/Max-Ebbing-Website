export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <div className="logo">Dein Name</div>

        <nav className="nav">
          <a href="#leistungen">Leistungen</a>
          <a href="#prozess">Prozess</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}