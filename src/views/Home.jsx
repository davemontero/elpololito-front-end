import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeGrid from '../components/HomeGrid';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Home = () => {
<<<<<<< HEAD

    useEffect(() => {
        fetch("http://localhost:5000/home", {
            method: 'get',
            headers: {

                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(response => response.json())
            .then(data => console.log(data))
            ;

        console.log(localStorage);
    });

    const [key, setKey] = useState('trabajador');
=======
    
    console.log(localStorage);
    
>>>>>>> 6c8f7a0156b4b1796163c0cf483eb2b79acf8a75

    return <>


        <Container>
            <Row>
                <Col>

                <Tabs
      id="switch-grid"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
                        <Tab eventKey="trabajador" title="Trabajadores">
                            <h1>Trabajadores destacados</h1>
                            <div>
                                <HomeGrid />
                            </div>
                        </Tab>

                        <Tab eventKey="aviso" title="Avisos">
                        <h1>Avisos destacados</h1>
                            <div>
                                <HomeGrid />
                            </div>
                        </Tab>
                    </Tabs>



                </Col>
            </Row>


            <Row>
                <Col>
                    <div>
                        <Link className="nav-link" to="/who_am_i">WHO AM I AAAAAA</Link>
                    </div>
                </Col>

            </Row>

        </Container>

    </>




}

export default Home