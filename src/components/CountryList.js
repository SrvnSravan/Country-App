import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import CountryCardHorizontal from "./CountryCardHorizontal";

// const countries = [
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },
//     { name: "Albania", region: "Europe", flag: "https://flagcdn.com/w320/al.png" },


// ];

const CountryList = () => {
    const { filteredCountries, page, perPage } = useSelector((state) => state.countries);
    const countriesToShow = filteredCountries.slice(0, page * perPage);

    return (
        <Container fluid className=" py-4">
            <Row>
                {countriesToShow.map(country => (
                    <Col key={country.name} xs={12} md={6} className="mb-3">
                        <CountryCardHorizontal key={country.name}
                            name={country.name}
                            region={country.region}
                            flag={country.flag} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CountryList;
