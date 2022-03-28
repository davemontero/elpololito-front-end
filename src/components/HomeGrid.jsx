import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomeGrid = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
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
                    >
                        <div>
                            <Card mx-auto="true" >
                                <Card.Img className="img-fluid" variant="top" src="https://cdn.geeksterra.com/q:i/r:1/wp:1/w:380/u:https://geeksterra.com/wp-content/uploads/2021/04/Goku-trabajando.jpg" />
                                <Card.Body>
                                    <Card.Title>Son Gokú</Card.Title>
                                    <Card.Text>
                                        Granjero
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png" />
                                    <Card.Body>
                                        <Card.Title>Frodo Baggins</Card.Title>
                                        <Card.Text>
                                            Realiza entregas en todo Santiago
                                        </Card.Text>                                       
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://www.infofueguina.com/u/fotografias/m/2021/4/2/f850x638-80410_157899_5050.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Mario Mario</Card.Title>
                                        <Card.Text>
                                            Plomero, Tenista, Golfista, Jardinero, Cazafantasmas...
                                        </Card.Text>                                       
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/10/Doom-Doom-Guy.jpg" />
                                    <Card.Body>
                                        <Card.Title>Doom Guy</Card.Title>
                                        <Card.Text>
                                            Experto Exterminador
                                        </Card.Text>                                     
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFQ34avLDNEqhIBQ4UEbtIg_ZslmdryfCbg&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>May</Card.Title>
                                        <Card.Text>
                                            Entrenadora de Delfines
                                        </Card.Text>                                     
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee0vA7UeQfdBJYU2yGHoCun91-yEEEjdOucV6IG-wpoHgo-ImeRUPRtoRhesoMHJ7tuI&usqp=CAU" />
                                    <Card.Body>
                                        <Card.Title>Bojji</Card.Title>
                                        <Card.Text>
                                            Joven Rey
                                        </Card.Text>                                     
                                    </Card.Body>
                                </Card>
                        </div>
                        <div>
                        <Card mx-auto="true" >
                                    <Card.Img className="img-fluid" variant="top" src="https://areajugones.sport.es/wp-content/uploads/2019/09/ash-pokemon439.jpg" />
                                    <Card.Body>
                                        <Card.Title>Ash Ketchum</Card.Title>
                                        <Card.Text>
                                            Perdedor de Ligas
                                        </Card.Text>                                     
                                    </Card.Body>
                                </Card>
                        </div>

                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>
}

export default HomeGrid