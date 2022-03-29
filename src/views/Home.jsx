import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Form,
  Row,
  Col,
  Tab,
  Tabs,
  FormControl,
  Button,
} from "react-bootstrap";
import HomeAvisos from "../components/HomeAvisos";
import HomeWorkers from "../components/HomeWorkers"
import NavbarApp from "../components/NavbarApp";

const Home = () => {
  const [key, setKey] = useState("trabajador");

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
        method: 'GET',
        headers: {

            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    })
        .then(response => response.json())
        .then(data => setQuienSoy(data));

},[]);

  return (
    <>
      <NavbarApp />
      <main>
        <section className="search-wrapper">
          <Container>
            <Form className="d-flex justify-content-center">
              <FormControl
                type="search"
                className="me-2 search-input"
                aria-label="Buscar"
              ></FormControl>
              <Button>Buscar</Button>
            </Form>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <Tabs
                  id="switch-grid"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="trabajador" title="Trabajadores">
                    <h2>Trabajadores destacados</h2>
                    <div>
                      <HomeWorkers />
                    </div>
                  </Tab>

                  <Tab eventKey="aviso" title="Avisos">
                    <h2>Avisos destacados</h2>
                    <div>
                      <HomeAvisos />
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <Link className="nav-link" to="/who_am_i">
                    WHO AM I AAAAAA
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Home;
