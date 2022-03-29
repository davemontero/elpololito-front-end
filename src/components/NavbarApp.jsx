import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavbarApp = () => {
  let navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }

  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">El Pololito</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
          <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/petition">Nuevo aviso</Nav.Link>
            
            <Nav.Link href="/publications">Mis avisos</Nav.Link>
            <Nav.Link href="/pololitos">Mis pololitos</Nav.Link>
            <NavDropdown title="Nombre">
              <NavDropdown.Item>Perfil</NavDropdown.Item>
              <NavDropdown.Item>Ayuda</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogOut}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
