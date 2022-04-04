import React, { useEffect, useContext, useState } from "react";
import { Button, Collapse, Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Context } from "../store/pololitoContext";
import { FaTwitter, FaFacebook, FaInstagram, FaHandsHelping, FaSearch, FaClock, FaClipboard } from "react-icons/fa";
import { BiTime, BiSearchAlt, BiReceipt, BiTrophy } from "react-icons/bi"
import { IoTimeOutline } from "react-icons/io5"
import { GrMoney, GrAnnounce } from "react-icons/gr"
import "react-multi-carousel/lib/styles.css";

function LandingPage() {
  const [openAviso, setOpenAviso] = useState(false);
  const [openPololito, setOpenPololito] = useState(false);
  const today = new Date();
  const { store, actions } = useContext(Context);
  const responsive = {
    desktoplg: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1400, min: 950 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 950, min: 720 },
      items: 2,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      partialVisibilityGutter: 70,
    },
  };

  useEffect(() => {
    actions.readPetitions();
  }, []);

  return (
    <>
      <section className="services-wrapper">
        <Container>
          <Row>
            <div className="section-header">
              <h2 className="section-title">Lo que puedes encontrar</h2>
              <p className="section-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa aperiam, dolorum harum nobis consequuntur inventore ad vero natus.</p>
            </div>
          </Row>
          <Row>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiReceipt className="services-icons"></BiReceipt>
                  <Card.Title className="services-card-title">Titulo 1</Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiSearchAlt className="services-icons"></BiSearchAlt>
                  <Card.Title className="services-card-title">Titulo 2</Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiTime className="services-icons"></BiTime>
                  <Card.Title className="services-card-title">Titulo 3</Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-card">
                <Card.Body className="services-card-body">
                  <BiTrophy className="services-icons"></BiTrophy>
                  <Card.Title className="services-card-title">Titulo 4</Card.Title>
                  <Card.Text className="services-card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio quo aliquam quidem iusto consequuntur nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="workers-wrapper">
        <Container>
        <div className="section-header">
              <h2 className="section-title">Personas ya trabajando</h2>
              <p className="section-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa aperiam, dolorum harum nobis consequuntur inventore ad vero natus.</p>
            </div>
          <div className="workers-content">
            <Carousel
              className="py-4"
              swipeable
              draggable
              showDots={false}
              partialVisible
              responsive={responsive}
              infinite
              autoPlaySpeed={5000}
              keyBoardControl
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              sliderClass=""
              slidesToSlide={1}
              additionalTransfrom={0}
              arrows
              focusOnSelect={false}
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >
              <Card style={{ width: "16em" }} className="h-100 carousel-card workers-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://cdn.geeksterra.com/q:i/r:1/wp:1/w:380/u:https://geeksterra.com/wp-content/uploads/2021/04/Goku-trabajando.jpg"
                /> 
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Son Gokú</Card.Title>
                  <Card.Text className="workers-card-text">Granjero</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://1.bp.blogspot.com/--nN9E8LB86c/X7Ewn5GEGmI/AAAAAAAAGLc/ueRKDW39iUg_5uBBtUANVOv0jMsBufeIQCLcBGAsYHQ/s1280/Frodo%2BBaggins.png"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Frodo Baggins</Card.Title>
                  <Card.Text className="workers-card-text">Realiza entregas en todo Santiago</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://www.infofueguina.com/u/fotografias/m/2021/4/2/f850x638-80410_157899_5050.jpeg"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Mario Mario</Card.Title>
                  <Card.Text className="workers-card-text">
                    Plomero, Tenista, Golfista, Jardinero, Cazafantasmas...
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/10/Doom-Doom-Guy.jpg"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Doom Guy</Card.Title>
                  <Card.Text className="workers-card-text">Experto Exterminador</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFQ34avLDNEqhIBQ4UEbtIg_ZslmdryfCbg&usqp=CAU"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">May</Card.Title>
                  <Card.Text className="workers-card-text">Entrenadora de Delfines</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee0vA7UeQfdBJYU2yGHoCun91-yEEEjdOucV6IG-wpoHgo-ImeRUPRtoRhesoMHJ7tuI&usqp=CAU"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Bojji</Card.Title>
                  <Card.Text className="workers-card-text">Joven Rey</Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "16em" }} className="h-100 carousel-card">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src="https://areajugones.sport.es/wp-content/uploads/2019/09/ash-pokemon439.jpg"
                />
                <Card.Body className="workers-card-body">
                  <Card.Title className="workers-card-title">Ash Ketchum</Card.Title>
                  <Card.Text className="workers-card-text">Perdedor de Ligas</Card.Text>
                </Card.Body>
              </Card>
            </Carousel>
          </div>
        </Container>
      </section>
      <section className="banner-wrapper">
        <Container>
          <Row>

          </Row>
        </Container>
      </section>
      <footer className="footer-wrapper">
        <Container>
          <Row>
            <Col>
              <h3>¿Necesitas ayuda o tienes una pregunta?</h3>
              <p>Contactanos en redes sociales</p>
              <div className="rrss-box">
                <a href="https://facebook.com" target="_blank" className="rrss">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" className="rrss">
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="rrss"
                >
                  <FaInstagram />
                </a>
              </div>
            </Col>
            <Col>
              <h4>Links</h4>
              <ul className="link-list">
                <li className="link-item">Aplicación</li>
                <li className="link-item">Avisos</li>
                <li className="link-item">Pololitos</li>
                <li className="link-item">Contacto</li>
              </ul>
            </Col>
            <Col>
              <h4>Contacto</h4>
            </Col>
          </Row>
          <Row>
            <span className="divider"></span>
          </Row>
          <Row>
            <span className="copy text-center">
              {today.getFullYear()} copyright
            </span>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default LandingPage;
