import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import HCard2 from "../components/HorizontalCardN2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarApp from "../components/NavbarApp"
import { Context } from "../store/pololitoContext";

const MisPololitos = () => {
  const { store, actions } = useContext(Context);

  const HandleDate = (date) => {
    const FormatDate = new Date(date);
    return FormatDate.toLocaleString();
  };


  useEffect(() => {
    actions.readWorkersProfiles();
    actions.getUserInfo()
  }, []);

  console.log(store.userinfo.person_id)
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
          {store.workersProfiles.filter(workersProfiles => workersProfiles.Worker_id == store.userinfo.person_id).map((workersProfile) => (
              
              <HCard2 key={workersProfile.pololito}
              title={workersProfile.Title}
              employerFirst={workersProfile.name}
              employerLast={workersProfile.last}
              PublicationDesc={workersProfile.Publication_desc}
            />
            
            ))}
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
