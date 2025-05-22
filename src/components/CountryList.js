import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountryCardHorizontal from "./CountryCardHorizontal";

const countries = [
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },

    // Add more...
];

const CountryList = () => {
    return (
        <Container className="py-4">
            <Row>
                {countries.map((country, idx) => (
                    <Col key={idx} xs={12} md={6} className="mb-3">
                        <CountryCardHorizontal {...country} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CountryList;
