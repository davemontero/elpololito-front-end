import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
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
                    <Link to="SignUp" className="btn btn-primary col-1">Inciar Sesion</Link>
                </div>
            </div>
        </nav>
    )
};

export default NavBar