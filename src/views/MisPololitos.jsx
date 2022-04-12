import React from "react";
import Container from "react-bootstrap/Container";
import HCard from "../components/HorizontalCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarApp from "../components/NavbarApp"

const MisPololitos = () => {
  return (
    <>
      <NavbarApp />
      <Container fluid>
        <Row>
          <Col xs={{ offset: 1 }}>
            {" "}
            <h1>Mis Pololitos</h1>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={{ offset: 1 }}>
            <h3>Pololitos pendientes</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <HCard />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col xs={{ offset: 1 }}>
            <h3>Pololitos completados</h3>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default MisPololitos;
