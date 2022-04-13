import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Button, Navbar } from "react-bootstrap";

const NavbarLanding = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("jwt");
    session ? setShow(true) : setShow(false);
  }, []);

  return (
    <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            El Pololito
            <img src="./images/flag.svg" className="title-flag" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="navbar-nav-center">
              <Nav.Link href="#servicios" className="nav-item-list">
                Servicios
              </Nav.Link>
              <Nav.Link href="#trabajadores" className="nav-item-list">
                Trabajadores
              </Nav.Link>
            </Nav>
            <Nav>
              {!show ? (
                <>
                  <Nav.Item>
                    <Link
                      className="nav-link nav-link-login nav-item-list"
                      to="/login"
                    >
                      Iniciar sesión
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/register" className="nav-link nav-link-btn nav-item-list">
                      Registrate
                    </Link>
                  </Nav.Item>
                </>
              ) : (
                <Nav.Item>
                  <Button className="nav-link nav-link-btn nav-item-list">
                    Ir a la app
                  </Button>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavbarLanding;
