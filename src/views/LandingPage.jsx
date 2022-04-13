import React, { useEffect, useContext, useState } from "react";
import { Button, Collapse, Container, Card, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Context } from "../store/pololitoContext";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
import "react-multi-carousel/lib/styles.css";
import WCard from "../components/WorkerCard";

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
    actions.readWorkersProfiles();
  }, []);

  return (
    <>
      <section className="userPanel-wrapper">
        <Container>
          <h2 className="userPanel-title text-center mb-5">
            Lo que puedes hacer
          </h2>
          <div className="userPanel-content d-flex justify-content-around mb-5">
            <div className="infoBlurb text-start">
              <Button
                className="btn btn-warning btn-lg btn3d"
                onClick={() => setOpenAviso(!openAviso)}
                aria-controls="collapseAviso"
                aria-expanded={openAviso}
              >
                Publicar un Aviso
              </Button>
              <Collapse className="aaa" in={openAviso}>
                <div id="collapseAviso">
                  <h2> ¿Quieres publicar avisos? </h2>
                  <ul>
                    <li>
                      {" "}
                      Puedes hacer visible tus necesidades mediante avisos y asá
                      trabajadores te contactarán para hacer un pololito
                    </li>                   
               
                  </ul>
                  <div className="float-start">
                  <Button
                  href="/register"
                className="btn btn-warning btn-lg btn3d "               
              >
                ¡Vamos!
              </Button>
              </div>
                </div>
              </Collapse>
            </div>
            <div className="infoBlurb text-start">
              <Button
                className="btn btn-warning btn-lg btn3d"
                onClick={() => setOpenPololito(!openPololito)}
                aria-controls="collapsePololito"
                aria-expanded={openPololito}
              >
                Hacer un Pololito
              </Button>
              <Collapse className="aaa" in={openPololito}>
                <div id="collapsePololito">
                  <h2> ¿Quieres hacer pololitos? </h2>
                  <ul>
                    <li>
                      {" "}
                      Crea un Perfil de Trabajador a través del cual otros
                      usuarios podrán encontrarte en los rubros que definas
                    </li>
                    <li>
                      {" "}
                      Filtra avisos de trabajo según tus habilidades o según la
                      comuna para encontrar el trabajo perfecto para ti
                    </li>
                  </ul>
                  <div className="float-end">
                  <Button
                  href="/register"
                className="btn btn-warning btn-lg btn3d "               
              >
                ¡Vamos!
              </Button>
              </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
      </section>
      <section className="workers-wrapper">
        <Container>
          <h2 className="workers-title text-center mb-5">
            Personas que han hecho pololitos
          </h2>
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
    
                {store.workersProfiles.map((workersProfiles) => (

                  <WCard
                    key={workersProfiles.Worker_id}
                    title={workersProfiles.Title}
                    name={workersProfiles.name}
                    lastname={workersProfiles.last}
                    contact={workersProfiles.mail}
                  />

                ))}
    
            </Carousel>
          </div>
        </Container>
      </section>
      <footer className="footer-wrapper">
        <Container>
        <Row>
            <Col>
                <h3>¿Necesitas ayuda o tienes una pregunta?</h3>
                <p>Contactanos en redes sociales</p>
                <div className="rrss-box">
                    <a href="https://facebook.com" target="_blank" className="rrss"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" className="rrss"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" className="rrss"><FaInstagram /></a>
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
