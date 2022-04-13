import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/pololitoContext';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const HCard2 = props => {
    const { store } = useContext(Context);
    const [quienSoy, setQuienSoy] = useState();


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

    return <>
        <Container fluid >
            <div className="HCardo" key={props.publication_id}>
                <Row>
                    <Col xs={6}><h2>trabajando en {props.title}</h2></Col>
                    <Col xs={{ span: 2, offset: 4 }}></Col>
                </Row>
                <br />
                <Row>
                    <Col xs={8}>
                        <div>
                            <br>
                            </br>
                            <br>
                            </br>
                            <p>
                                Empleador <b>{props.employerFirst} {props.employerLast}</b>
                            </p>
                            <p>
                                 Descripcion del empleo <b>{props.PublicationDesc}</b>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://alfabetajuega.com/hero/2021/02/luffy.jpg?width=1200&aspect_ratio=1200:631"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://pm1.narvii.com/6200/949864428b23723ac5b107d5c062710bf4208f7b_hq.jpg"
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://areajugones.sport.es/wp-content/uploads/2020/09/one-piece-luffy.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
};
export default HCard2;
