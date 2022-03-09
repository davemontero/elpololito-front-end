import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function LandingPage() {
    const [openAviso, setOpenAviso] = useState(false);
    const [openPololito, setOpenPololito] = useState(false);

    return (
        <>
            <Container fluid='md' >
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col mx-auto>
                        <h2 className='text-center'>Hoy Quiero...</h2>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col xs={{ span: 5, offset: 2 }}>
                        <div className='infoBlurb'>
                            <Button
                                className="btn btn-primary btn-lg btn3d"
                                onClick={() => setOpenAviso(!openAviso)}
                                aria-controls="collapseInfoAviso"
                                aria-expanded={openAviso}
                            >
                                Crear aviso
                            </Button>
                            <Collapse in={openAviso}>
                                <div id="collapseInfoAviso">
                                    <div>
                                        <h2> Buscas ayuda con una peguita? </h2>
                                        <ul>
                                        <li> Crea un aviso con el trabajo que quieres que se realice </li>
                                        <li> Busca trabajadores cuyo perfil coincida con el trabajo que quieres que se realice </li>
                                        <li> Ponte en contacto con el trabajador ideal para tus necesidades </li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                    <Col xs={{ span: 5 }}>
                        <div className='infoBlurb'>
                            <Button
                                className="btn btn-warning btn-lg btn3d"
                                onClick={() => setOpenPololito(!openPololito)}
                                aria-controls="collapseInfoPololito"
                                aria-expanded={openPololito}
                            >
                                Hacer un Pololito
                            </Button>
                            <Collapse in={openPololito}>
                                <div id="collapseInfoPololito">
                                    <h2> Querí shaajar? </h2>
                                    <ul>
                                        <li> Crea un Perfil de Trabajador a través del cual otros usuarios podrán encontrarte en los rubros que definas</li>
                                        <li> Filtra avisos de trabajo según tus habilidades o según la comuna para encontrar el trabajo perfecto para ti</li>
                                    </ul>
                                </div>
                            </Collapse>
                        </div>
                    </Col>
                </Row>               
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col mx-auto>
                        <h2 className='text-center'>O encuentra Exactamente lo que buscas!</h2>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <h2>Trabajadores</h2>
                </Row>
                <br />
                <Row>
                    <Col >
                        <Carousel id="carousel-trabajadores" variant="dark" align="center">
                            <Carousel.Item>
                                <Card style={{ width: '24rem' }}>
                                    <Card.Img className="img-fluid" variant="top" src="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2021/08/principal-goku-dragon-ball-es-asexual.jpg" />
                                    <Card.Body>
                                        <Card.Title>Son Gokú</Card.Title>
                                        <Card.Text>
                                            Realiza sacás de chucha a domicilio.
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '24rem' }}>
                                    <Card.Img className="img-fluid" variant="top" src="https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png" />
                                    <Card.Body>
                                        <Card.Title>Frodo Baggins</Card.Title>
                                        <Card.Text>
                                            Realiza entregas en todo Santiago
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '24rem' }}>
                                    <Card.Img className="img-fluid" variant="top" src="https://www.infofueguina.com/u/fotografias/m/2021/4/2/f850x638-80410_157899_5050.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Mario Mario</Card.Title>
                                        <Card.Text>
                                            Plomero, Tenista, Golfista, Jardinero, Cazafantasmas, Medallista Olímpico...
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <h2>Avisos</h2>
                </Row>
                <br />
                <Row>
                    <Col >
                        <Carousel id="carousel-avisos" variant="dark" align="center">
                            <Carousel.Item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Se busca Jardinero</Card.Title>
                                        <Card.Text>
                                            Santiago. Comuna de Maipú.
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Necesito una niñera de 4 a 8</Card.Title>
                                        <Card.Text>
                                            Santiago. Comuna de Las Condes. Días Lunes, Martes, y Jueves.
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>se busca gf 10gp</Card.Title>
                                        <Card.Text>
                                            Meet at GE
                                        </Card.Text>
                                        <Button variant="primary">Contactar</Button>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <h2>Más Información</h2>
                    <br />
                    <p>One Piece es un manga escrito e ilustrado por Eiichirō Oda y actualmente es el manga más comprado en el mundo. Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997 y a la fecha se han publicado 101 volúmenes. Por otra parte, Toei Animation realiza el anime que adapta el manga, siendo transmitido en Fuji TV desde el 20 de octubre de 1999 hasta la actualidad. Larp Editores licenció el manga en Argentina y posteriormente fue retomado por Ivrea. En España principalmente la publicación estaba a manos de Planeta DeAgostini y después pasó a manos de Planeta Cómic el cual se encarga actualmente de su publicación. En México fue publicado por Editorial Toukan en un principio y, más tarde, por Panini Comics.2

                        One Piece es el manga más vendido de la revista Shonen Jump, (la más importante, reconocida y vendida del medio), de la editorial Shueisha, y de la historia, con más de 490 millones3​ de copias vendidas a nivel mundial, (400 millones en Japón, y 90 millones en 58 países) y en Japón fue el manga más vendido de manera consecutiva desde el año 2007 hasta 2018 logrando un récord histórico. En la encuesta realizada por la Agencia de Cultura Japonesa sobre los cincuenta mejores animes y mangas de Japón, One Piece alcanzó el puesto número 11.4​ El anime también ha contado con varios reconocimientos. En el ranking publicado por TV Asahi de 2005 sobre los 100 animes más conocidos de todos los tiempos, basado a una encuesta en línea en Japón, One Piece alcanzó el puesto número 6.5​ En 2016 era el décimo anime más largo de la historia.6​7​ y el que más ganancias ha reportado a su autor ostentando el récord Guinness como el manga más vendido de la historia del mundo.</p>
                </Row>
            </Container>
        </>
    );
}


export default LandingPage;