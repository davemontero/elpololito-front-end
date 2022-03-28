import React, { useContext, useEffect } from "react";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Context } from "../store/pololitoContext";

const HomeAvisos = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.readPetitions();
  }, []);



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return <>
        <Container fluid>
            <Row>
                <Col>


                    <Carousel

                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={8000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        partialVisible
                        className="py-4"
                    >


                        {store.publications.map(publication =>
                            <Card mx-auto="true" key={publication.pub_id}>
                                <Card.Body>
                                    <Card.Title> Se Busca {publication.Title}</Card.Title>
                                    <Card.Text>
                                        {publication.place}
                                    </Card.Text>
                                    <Button variant="primary">Contactar</Button>
                                </Card.Body>
                            </Card>
                        )}

                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>

};

export default HomeAvisos;
