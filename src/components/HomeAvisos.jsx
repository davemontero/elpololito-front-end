import React, { useContext, useEffect, useState } from "react";
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
    const [Pololito, setPololito] = useState({
        "status": false,
        "user_id": 0,
        "pub_id": 0
    })
    useEffect(() => {
        actions.readPetitions();
    }, []);

    useEffect(() => {
        actions.WhoAmI();
        

    },[]);


    const HandlePololito = (e) => {
        setPololito({
            "status": true,
            "user_id": store.currentUser.id[0],
            "pub_id": e
        })

        fetch("http://localhost:5000/create-pololito", {
            "method": "POST",
            "headers": {
                "Content-type": "application/json"
            },
            "body": JSON.stringify(Pololito)
        })
            .then(response => {
                console.log(response);
            })
    }

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
                        {store.publications.filter(publications => (publications.fk_user_id != store.currentUser.id)).map(publication =>
                            <Card mx-auto="true" key={publication.pub_id}>
                                <Card.Body>
                                    <Card.Title> Se Busca {publication.Title}</Card.Title>
                                    <Card.Text>
                                        {publication.place}
                                    </Card.Text>
                                        <Button className="btn btn-warning btn-lg btn3d" onClick={() => HandlePololito(publication.pub_id)}>
                                            Realizar Pololito
                                        </Button>
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
