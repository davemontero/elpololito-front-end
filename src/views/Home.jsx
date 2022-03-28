import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeWorkers from '../components/HomeWorkers';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeAvisos from '../components/HomeAvisos'



const Home = () => {

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
    });

    const [key, setKey] = useState('trabajador');

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
                            <h2>Trabajadores destacados</h2>
                            <div>
                                <HomeWorkers />
                            </div>
                        </Tab>

                        <Tab eventKey="aviso" title="Avisos">
                            <h2>Avisos destacados</h2>
                            <div>
                                <HomeAvisos />
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