import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const HCard = () => {

    return <>
        <Container fluid >
            <div className="HCardo">
                <Row>
                    <Col xs={6}><h3>Título</h3></Col>
                    <Col xs={{ span: 2, offset: 4 }}> RATING PENDING</Col>
                </Row>
                <br />
                <Row>
                    <Col xs={8}>
                        <div>
                            <p>
                                Lugar
                            </p>
                            <p>
                                Fecha y Hora
                            </p>
                            <p>
                                Descripción
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
}
export default HCard