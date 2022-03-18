<<<<<<< HEAD
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const NavBar = () => {

   

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="btn btn-primary col-1"> Inicio </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row ms-3" id="navbarNav">
                    <ul className="navbar-nav col-10">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
                        </li>

                        
                    </ul>
                    <Link to="SignUp" className="btn btn-primary col-1">Iniciar Sesion</Link>
                </div>
            </div>
        </nav>
    )
=======
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
                Iniciar sesión
            </a>
            </li>
            <li className="nav-item nav-item-list">
            <a className="nav-link nav-link-btn" href="#" data-bs-toggle="modal" data-bs-target="#registerModal">
                Registrate
            </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
>>>>>>> aeb0b47819c9b42e0adfe5c8b232c5a5b2e872ef
};

export default Navbar;
