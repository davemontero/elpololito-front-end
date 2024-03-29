import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Col } from "react-bootstrap";
import { Context } from '../store/pololitoContext';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';




const WCard = props => {

    return <>
        <Card style={{ width: "16em" }} className="h-100 carousel-card">
            <Card.Img
                className="img-fluid"
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/206/206854.png"
            />
            <Card.Body>
                <Card.Title> {props.name} </Card.Title>
                <Card.Text>Recientemente trabajo en <b>{props.title}</b> </Card.Text>
                <Card.Text>Contacto: <b>{props.contact}</b> </Card.Text>

            </Card.Body>
        </Card>
    </>
};
export default WCard;




