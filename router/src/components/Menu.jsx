function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Docs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tutorial">
              Tutoriel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/community">
              Communauté
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
