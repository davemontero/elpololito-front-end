import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import HCard from "../components/HorizontalCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Context } from "../store/pololitoContext";
import NavbarApp from "../components/NavbarApp"

const MisAvisos = () => {
  const { store, actions } = useContext(Context);




  useEffect(() => {
    actions.readPetitions();
    actions.getUserInfo()
  }, []);

 

  const HandleDate = (date) => {
    const FormatDate = new Date(date);
    return FormatDate.toLocaleString();
  };

  const Petitions = () =>{
    if(store.publications.user_id == 1 ) {
      
    }
  }

  return (
    <>
      <NavbarApp />
      <Row>
        <Col xs={{ offset: 1 }}>
          {" "}
          <h1>Avisos</h1>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col xs={{ offset: 1 }}>
          <h3>Avisos abiertos</h3>
        </Col>
      </Row>
      <br />
      <Container fluid>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
          {store.publications.filter(publications => publications.fk_user_id == store.userinfo.person_id).map((publication) => (
              
              <HCard key={publication.pub_id}
              title={publication.Title}
              body={publication.Body}
              date={HandleDate(publication.create_at)}
              address={publication.place}
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
            <h3>Avisos pasados</h3>
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
};

export default MisAvisos;
