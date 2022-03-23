const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          <a className="navbar-brand" href="#">
          El Pololito
          <img src="./images/flag.svg" className="title-flag" />
          </a>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav navbar-nav-center">
              <li className="nav-item nav-item-list">
              <a className="nav-link" href="#">
                  Inicio
              </a>
              </li>
              <li className="nav-item nav-item-list">
              <a className="nav-link" href="#">
                  Nosotros
              </a>
              </li>
              <li className="nav-item nav-item-list">
              <a className="nav-link" href="#">
                  Servicios
              </a>
              </li>
              <li className="nav-item nav-item-list">
              <a className="nav-link" href="#">
                  Contacto
              </a>
              </li>
          </ul>
          <ul className="navbar-nav">
              <li className="nav-item nav-item-list">
              <a className="nav-link nav-link-login" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Mi Perfil
              </a>
              </li>
          </ul>
          </div>
      </div>
      </nav>
    );
  };
  
  export default Navbar;
  