import React, { useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import HCard from "../components/HorizontalCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Context } from '../store/pololitoContext';



const MisAvisos = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.readPetitions();
    }, [])

    return <>

        <Row>
            <Col xs={{ offset: 1 }}> <h1>
                Mis Avisos
            </h1></Col>

        </Row>
        <br />
        <br />
        <Row>
            <Col xs={{ offset: 1 }}>
                <h3>Avisos abiertos</h3>
            </Col>
        </Row>
        <br />

        {store.publications.map(publication =>
            <Container fluid>

                <Row>
                    <Col xs={{ span: 10, offset: 1 }}>
                        <HCard title = {publication.Title} body = {publication.Body} date = {publication.create_at} address =  {publication.place} />
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

        )}




    </>
}

export default MisAvisos