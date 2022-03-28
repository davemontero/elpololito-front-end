import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const Home = () => {
  const date = new Date("Sun, 27 Mar 2022 15:45:07 GMT")
  console.log(date.toLocaleString())
  return (
      <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">El Pololito</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <Nav.Link>Nuevo aviso</Nav.Link>
            <Nav.Link>Mis avisos</Nav.Link>
            <Nav.Link>Mis pololitos</Nav.Link>
            <NavDropdown title="Nombre">
                <NavDropdown.Item>Perfil</NavDropdown.Item>
                <NavDropdown.Item>Ayuda</NavDropdown.Item>
                <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>
      <section className="search-wrapper">
        <Container>
            <Form className="d-flex justify-content-center">
                <FormControl
                    type="search"
                    className="me-2 search-input"
                    aria-label="Buscar">
                </FormControl>
                <Button>Buscar</Button>
            </Form>
        </Container>
      </section>
      <section>
        {/* ACA EL CONTENIDO RESTANTE */}
      </section>
    </main>
    </>
  );
};

<<<<<<< HEAD
export default Home;
=======



}

export default Home
>>>>>>> 8f6dc3a73fe799922e89d12b001465c80745e1bf
