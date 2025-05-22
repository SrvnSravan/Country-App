import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import th from '../assets/images/th.jpg';

const CountryCardHorizontal = ({ name, region, flag }) => {
    return (
        <Card className="mb-3 shadow-sm" style={{ border: "2px solid black", borderRadius: 0 }}>
            <Row className="g-0 align-items-center">
                <Col xs={4} md={3} className="p-3 d-flex justify-content-center align-items-center">
                    <Card.Img
                        src={flag || th}
                        alt={`${name} flag`}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: 0,
                        }}
                    />
                </Col>
                <Col xs={8} md={9}>
                    <Card.Body className="text-start">
                        <Card.Title className="mb-1 fw-bold">{name}</Card.Title>
                        <Card.Text className="text-muted mb-0">{region}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default CountryCardHorizontal;
