import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("jwt");
    session ? setShow(true) : setShow(false);
  }, []);

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
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
              <Link className="nav-link" to="/petition">
                Publicar Aviso
              </Link>
            </li>
            <li className="nav-item nav-item-list">
              <Link className="nav-link" to="/pololitos">
                Mis Pololitos
              </Link>
            </li>
            <li className="nav-item nav-item-list">
              <Link className="nav-link" to="/publications">
                Mis Avisos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {show === false ? (
              <>
                <li className="nav-item nav-item-list">
                  <Link className="nav-link nav-link-login" to="/login">
                    Iniciar sesión
                  </Link>
                </li>
                <li className="nav-item nav-item-list">
                  <Link
                    className="nav-link nav-link-btn"
                    to="/register"
                  >
                    Registrate
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item nav-item-list">
                <Link className="nav-link nav-link-btn" to="/home">
                  Ir a la app
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
